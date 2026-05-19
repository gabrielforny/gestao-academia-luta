import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class _PhoneMaskFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue old, TextEditingValue current) {
    final digits = current.text.replaceAll(RegExp(r'\D'), '');
    final buf = StringBuffer();
    for (var i = 0; i < digits.length && i < 11; i++) {
      if (i == 0) buf.write('(');
      if (i == 2) buf.write(') ');
      if (digits.length == 11) {
        if (i == 7) buf.write('-');
      } else {
        if (i == 6) buf.write('-');
      }
      buf.write(digits[i]);
    }
    final text = buf.toString();
    return TextEditingValue(
      text: text,
      selection: TextSelection.collapsed(offset: text.length),
    );
  }
}

class AdminEquipeCriarScreen extends StatefulWidget {
  const AdminEquipeCriarScreen({super.key});

  @override
  State<AdminEquipeCriarScreen> createState() => _AdminEquipeCriarScreenState();
}

class _AdminEquipeCriarScreenState extends State<AdminEquipeCriarScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nome = TextEditingController();
  final _email = TextEditingController();
  final _telefone = TextEditingController();
  final _cargo = TextEditingController();
  String _perfil = 'Professor';
  bool _salvando = false;
  String? _erro;

  static const _perfis = ['Professor', 'Secretaria', 'Admin'];

  Future<void> _salvar() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() { _salvando = true; _erro = null; });
    try {
      await dio.post('/api/funcionarios', data: {
        'nome': _nome.text.trim(),
        'email': _email.text.trim().isEmpty ? null : _email.text.trim(),
        'telefone': _telefone.text.trim(),
        'cargo': _cargo.text.trim().isEmpty ? _perfil : _cargo.text.trim(),
        'perfil': _perfil,
        'permissoes': <String, bool>{},
      });
      if (mounted) context.pop();
    } catch (e) {
      String msg = 'Erro ao cadastrar funcionário.';
      try {
        final body = (e as dynamic).response?.data as Map?;
        msg = body?['mensagem'] as String? ?? msg;
      } catch (_) {}
      if (mounted) setState(() => _erro = msg);
    } finally {
      if (mounted) setState(() => _salvando = false);
    }
  }

  @override
  void dispose() {
    _nome.dispose();
    _email.dispose();
    _telefone.dispose();
    _cargo.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      appBar: AppBar(
        backgroundColor: kSurface,
        foregroundColor: kText1,
        elevation: 0,
        title: Text('Novo Funcionário', style: TextStyle(color: kText1, fontWeight: FontWeight.w700)),
      ),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            _section('Dados pessoais'),
            _field(_nome, 'Nome completo *', required: true),
            _field(_email, 'E-mail', keyboard: TextInputType.emailAddress),
            _field(_telefone, 'Telefone *', keyboard: TextInputType.phone, required: true, phoneMask: true),
            const SizedBox(height: 16),
            _section('Cargo e perfil'),
            _field(_cargo, 'Cargo (ex: Professor de BJJ)'),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              decoration: BoxDecoration(
                color: kSurface,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: kBorder),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  value: _perfil,
                  dropdownColor: kSurface,
                  isExpanded: true,
                  items: _perfis.map((p) => DropdownMenuItem(
                    value: p,
                    child: Text(p, style: TextStyle(color: kText1)),
                  )).toList(),
                  onChanged: (v) => setState(() => _perfil = v ?? 'Professor'),
                ),
              ),
            ),
            const SizedBox(height: 24),
            if (_erro != null)
              Container(
                padding: const EdgeInsets.all(12),
                margin: const EdgeInsets.only(bottom: 12),
                decoration: BoxDecoration(color: kDanger.withOpacity(0.12), borderRadius: BorderRadius.circular(10)),
                child: Text(_erro!, style: TextStyle(color: kDanger, fontSize: 13)),
              ),
            SizedBox(
              height: 50,
              child: ElevatedButton(
                onPressed: _salvando ? null : _salvar,
                style: ElevatedButton.styleFrom(
                  backgroundColor: kPrimary,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                child: _salvando
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Text('Cadastrar funcionário', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _section(String label) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Text(label, style: TextStyle(color: kText2, fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 0.5)),
      );

  Widget _field(TextEditingController ctrl, String hint, {bool required = false, TextInputType? keyboard, bool phoneMask = false}) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: TextFormField(
          controller: ctrl,
          keyboardType: keyboard,
          inputFormatters: phoneMask ? [_PhoneMaskFormatter()] : null,
          style: TextStyle(color: kText1),
          validator: required ? (v) => (v == null || v.trim().isEmpty) ? 'Campo obrigatório' : null : null,
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: TextStyle(color: kText2, fontSize: 14),
            filled: true,
            fillColor: kSurface,
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
            focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kPrimary)),
            errorBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kDanger)),
          ),
        ),
      );
}
