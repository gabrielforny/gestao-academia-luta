import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class _SmartInputFormatter extends TextInputFormatter {
  static final _onlyDigits = RegExp(r'\D');
  static final _hasLetter = RegExp(r'[a-zA-Z@]');

  @override
  TextEditingValue formatEditUpdate(TextEditingValue old, TextEditingValue next) {
    final text = next.text;
    if (text.isEmpty) return next;
    if (_hasLetter.hasMatch(text)) return next;

    final raw = text.replaceAll(_onlyDigits, '');
    final digits = raw.length > 11 ? raw.substring(0, 11) : raw;

    final buf = StringBuffer();
    for (var i = 0; i < digits.length; i++) {
      if (i == 0) buf.write('(');
      if (i == 2) buf.write(') ');
      if (digits.length == 11 && i == 7) buf.write('-');
      if (digits.length <= 10 && i == 6) buf.write('-');
      buf.write(digits[i]);
    }

    final formatted = buf.toString();
    return next.copyWith(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

enum _InputMode { indefinido, email, telefone }

class EsqueciSenhaScreen extends StatefulWidget {
  const EsqueciSenhaScreen({super.key});

  @override
  State<EsqueciSenhaScreen> createState() => _EsqueciSenhaScreenState();
}

class _EsqueciSenhaScreenState extends State<EsqueciSenhaScreen> {
  final _idCtrl = TextEditingController();
  final _senhaCtrl = TextEditingController();
  final _confirmCtrl = TextEditingController();

  // step 0 = email/telefone, step 1 = data nascimento, step 2 = nova senha
  int _step = 0;
  bool _loading = false;
  String? _erro;
  String? _resetToken;
  String? _nomeUsuario;
  DateTime? _dataNasc;
  _InputMode _mode = _InputMode.indefinido;

  static final _emailRegex = RegExp(r'^[\w\.\+\-]+@[\w\-]+\.[a-zA-Z]{2,}$');

  void _onIdChanged(String v) {
    if (v.isEmpty) {
      if (_mode != _InputMode.indefinido) setState(() => _mode = _InputMode.indefinido);
      return;
    }
    final hasLetter = RegExp(r'[a-zA-Z@]').hasMatch(v);
    final newMode = hasLetter ? _InputMode.email : _InputMode.telefone;
    if (newMode != _mode) setState(() => _mode = newMode);
  }

  String _rawPhone() => _idCtrl.text.replaceAll(RegExp(r'\D'), '');

  String? _validarId() {
    final v = _idCtrl.text.trim();
    if (v.isEmpty) return 'Informe seu e-mail ou telefone.';
    if (_mode == _InputMode.email) {
      if (!_emailRegex.hasMatch(v)) return 'E-mail inválido.';
    } else if (_mode == _InputMode.telefone) {
      final digits = _rawPhone();
      if (digits.length < 10 || digits.length > 11) return 'Telefone inválido. Use DDD + número.';
    }
    return null;
  }

  // Etapa 0 → 1: validação local apenas, sem chamada de API (evita enumeração de usuários)
  void _avancarParaNascimento() {
    final erroVal = _validarId();
    if (erroVal != null) { setState(() => _erro = erroVal); return; }
    setState(() { _step = 1; _erro = null; });
  }

  Future<void> _pickDataNasc() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _dataNasc ?? DateTime(1990),
      firstDate: DateTime(1920),
      lastDate: DateTime.now(),
      builder: (ctx, child) => Theme(
        data: Theme.of(ctx).copyWith(
          colorScheme: ColorScheme.dark(
            primary: kPrimary,
            surface: kSurface,
            onSurface: kText1,
          ),
        ),
        child: child!,
      ),
    );
    if (picked != null) setState(() { _dataNasc = picked; _erro = null; });
  }

  // Etapa 1 → 2: chama a API com email/telefone + data de nascimento
  Future<void> _verificarIdentidade() async {
    if (_dataNasc == null) { setState(() => _erro = 'Selecione sua data de nascimento.'); return; }
    setState(() { _loading = true; _erro = null; });
    try {
      final payload = _mode == _InputMode.telefone ? _rawPhone() : _idCtrl.text.trim();
      final nascFormatado =
          '${_dataNasc!.year}-${_dataNasc!.month.toString().padLeft(2, '0')}-${_dataNasc!.day.toString().padLeft(2, '0')}';
      final res = await dio.post('/api/auth/recuperar-acesso', data: {
        'emailOuTelefone': payload,
        'dataNascimento': nascFormatado,
      });
      final body = res.data as Map<String, dynamic>;
      if (body['sucesso'] == true) {
        final d = body['dados'] as Map<String, dynamic>;
        setState(() {
          _resetToken = d['setupToken'] as String?;
          _nomeUsuario = d['nome'] as String?;
          _step = 2;
        });
      } else {
        setState(() => _erro = body['mensagem'] ?? 'Dados incorretos.');
      }
    } on DioException catch (e) {
      setState(() => _erro = e.response?.data?['mensagem'] ?? 'Erro de conexão.');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  // Etapa 2: redefine a senha com o token
  Future<void> _redefinirSenha() async {
    if (_senhaCtrl.text.length < 6) {
      setState(() => _erro = 'A senha deve ter no mínimo 6 caracteres.');
      return;
    }
    if (_senhaCtrl.text != _confirmCtrl.text) {
      setState(() => _erro = 'As senhas não conferem.');
      return;
    }
    setState(() { _loading = true; _erro = null; });
    try {
      final res = await dio.post('/api/auth/reset-password', data: {
        'token': _resetToken,
        'novaSenha': _senhaCtrl.text,
      });
      final body = res.data as Map<String, dynamic>;
      if (body['sucesso'] == true) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Senha redefinida! Faça login.')),
        );
        context.go('/login');
      } else {
        setState(() => _erro = body['mensagem'] ?? 'Erro ao redefinir senha.');
      }
    } on DioException catch (e) {
      setState(() => _erro = e.response?.data?['mensagem'] ?? 'Erro de conexão.');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  void dispose() {
    _idCtrl.dispose();
    _senhaCtrl.dispose();
    _confirmCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      appBar: AppBar(
        backgroundColor: kBg,
        foregroundColor: kText1,
        title: const Text('Esqueci minha senha'),
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new_rounded),
          onPressed: () {
            if (_step > 0) {
              setState(() { _step--; _erro = null; });
            } else {
              context.go('/login');
            }
          },
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: switch (_step) {
            0 => _buildStep0(),
            1 => _buildStep1(),
            _ => _buildStep2(),
          },
        ),
      ),
    );
  }

  Widget _buildStep0() {
    final isPhone = _mode == _InputMode.telefone;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _progresso(0),
        const SizedBox(height: 24),
        Text('Identifique-se',
            style: TextStyle(color: kText1, fontSize: 22, fontWeight: FontWeight.w800)),
        const SizedBox(height: 8),
        Text('Informe o e-mail ou telefone cadastrado pelo seu administrador.',
            style: TextStyle(color: kText2, fontSize: 14)),
        const SizedBox(height: 28),
        _label('E-mail ou telefone'),
        TextField(
          controller: _idCtrl,
          onChanged: _onIdChanged,
          keyboardType: TextInputType.emailAddress,
          inputFormatters: [_SmartInputFormatter()],
          style: TextStyle(color: kText1, fontSize: 15),
          decoration: InputDecoration(
            hintText: isPhone ? '(11) 99999-0000' : 'seu@email.com ou telefone',
            hintStyle: TextStyle(color: kText2),
            prefixIcon: Icon(
              _mode == _InputMode.telefone
                  ? Icons.phone_outlined
                  : _mode == _InputMode.email
                      ? Icons.mail_outline
                      : Icons.person_outline,
              color: kText2,
              size: 20,
            ),
            filled: true,
            fillColor: kSurface,
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
            focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kPrimary)),
          ),
        ),
        _errorBox(),
        const SizedBox(height: 24),
        _btn('Continuar', _avancarParaNascimento),
      ],
    );
  }

  Widget _buildStep1() {
    final nasc = _dataNasc;
    final nascLabel = nasc != null
        ? '${nasc.day.toString().padLeft(2, '0')}/${nasc.month.toString().padLeft(2, '0')}/${nasc.year}'
        : 'Selecionar data';

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _progresso(1),
        const SizedBox(height: 24),
        Text('Confirme sua identidade',
            style: TextStyle(color: kText1, fontSize: 22, fontWeight: FontWeight.w800)),
        const SizedBox(height: 8),
        Text(
          'Para sua segurança, informe sua data de nascimento cadastrada.',
          style: TextStyle(color: kText2, fontSize: 14),
        ),
        const SizedBox(height: 28),
        _label('Data de nascimento'),
        GestureDetector(
          onTap: _pickDataNasc,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(
              color: kSurface,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: nasc != null ? kPrimary : kBorder),
            ),
            child: Row(
              children: [
                Icon(Icons.cake_outlined, color: nasc != null ? kPrimary : kText2, size: 20),
                const SizedBox(width: 12),
                Text(
                  nascLabel,
                  style: TextStyle(
                    color: nasc != null ? kText1 : kText2,
                    fontSize: 15,
                  ),
                ),
                const Spacer(),
                Icon(Icons.calendar_today_rounded, color: kText2, size: 16),
              ],
            ),
          ),
        ),
        _errorBox(),
        const SizedBox(height: 24),
        _btn('Verificar identidade', _loading ? null : _verificarIdentidade),
      ],
    );
  }

  Widget _buildStep2() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _progresso(2),
        const SizedBox(height: 24),
        Text('Olá, ${_nomeUsuario ?? ''}!',
            style: TextStyle(color: kText1, fontSize: 22, fontWeight: FontWeight.w800)),
        const SizedBox(height: 8),
        Text('Identidade confirmada. Crie sua nova senha (mínimo 6 caracteres).',
            style: TextStyle(color: kText2, fontSize: 14)),
        const SizedBox(height: 28),
        _label('Nova senha'),
        _input(_senhaCtrl, '••••••••', obscure: true),
        const SizedBox(height: 14),
        _label('Confirmar senha'),
        _input(_confirmCtrl, '••••••••', obscure: true),
        _errorBox(),
        const SizedBox(height: 24),
        _btn('Redefinir senha', _loading ? null : _redefinirSenha),
      ],
    );
  }

  Widget _progresso(int etapa) {
    return Row(
      children: List.generate(3, (i) {
        final ativo = i <= etapa;
        return Expanded(
          child: Container(
            margin: EdgeInsets.only(left: i == 0 ? 0 : 4),
            height: 4,
            decoration: BoxDecoration(
              color: ativo ? kPrimary : kBorder,
              borderRadius: BorderRadius.circular(2),
            ),
          ),
        );
      }),
    );
  }

  Widget _label(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Text(t, style: TextStyle(color: kText2, fontSize: 12, fontWeight: FontWeight.w600)),
      );

  Widget _input(TextEditingController c, String hint, {bool obscure = false}) => TextField(
        controller: c,
        obscureText: obscure,
        style: TextStyle(color: kText1, fontSize: 15),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: TextStyle(color: kText2),
          filled: true,
          fillColor: kSurface,
          contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kPrimary)),
        ),
      );

  Widget _errorBox() => _erro != null
      ? Padding(
          padding: const EdgeInsets.only(top: 16),
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: kDanger.withOpacity(0.12),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Text(_erro!, style: TextStyle(color: kDanger, fontSize: 13)),
          ),
        )
      : const SizedBox.shrink();

  Widget _btn(String label, VoidCallback? onTap) => FilledButton(
        onPressed: onTap,
        style: FilledButton.styleFrom(
          backgroundColor: kPrimary,
          padding: const EdgeInsets.symmetric(vertical: 16),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        ),
        child: _loading
            ? const SizedBox(height: 18, width: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
            : Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
      );
}
