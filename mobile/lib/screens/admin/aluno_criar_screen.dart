import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class AdminAlunoCriarScreen extends StatefulWidget {
  const AdminAlunoCriarScreen({super.key});

  @override
  State<AdminAlunoCriarScreen> createState() => _AdminAlunoCriarScreenState();
}

class _AdminAlunoCriarScreenState extends State<AdminAlunoCriarScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nome = TextEditingController();
  final _email = TextEditingController();
  final _telefone = TextEditingController();
  final _nascimento = TextEditingController();
  final _emergenciaNome = TextEditingController();
  final _emergenciaTel = TextEditingController();
  final _diaVenc = TextEditingController();

  List<Map<String, dynamic>> _planos = [];
  String? _planoId;
  bool _salvando = false;
  String? _erro;

  @override
  void initState() {
    super.initState();
    _carregarPlanos();
  }

  Future<void> _carregarPlanos() async {
    try {
      final res = await dio.get('/api/planos');
      final body = res.data as Map<String, dynamic>;
      final dados = body['dados'];
      final list = dados is List ? dados : (dados is Map ? (dados['itens'] as List? ?? []) : []);
      if (mounted) setState(() => _planos = list.cast<Map<String, dynamic>>());
    } catch (_) {}
  }

  Future<void> _salvar() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() { _salvando = true; _erro = null; });
    try {
      await dio.post('/api/alunos', data: {
        'nome': _nome.text.trim(),
        'email': _email.text.trim().isEmpty ? null : _email.text.trim(),
        'telefone': _telefone.text.trim(),
        if (_nascimento.text.trim().isNotEmpty) 'dataNascimento': _nascimento.text.trim(),
        if (_emergenciaNome.text.trim().isNotEmpty) 'contatoEmergenciaNome': _emergenciaNome.text.trim(),
        if (_emergenciaTel.text.trim().isNotEmpty) 'contatoEmergenciaTelefone': _emergenciaTel.text.trim(),
        if (_planoId != null) 'planoId': _planoId,
        if (_diaVenc.text.trim().isNotEmpty) 'diaVencimento': int.tryParse(_diaVenc.text.trim()),
      });
      if (mounted) context.pop();
    } catch (e) {
      if (mounted) setState(() => _erro = 'Erro ao cadastrar aluno. Verifique os dados.');
    } finally {
      if (mounted) setState(() => _salvando = false);
    }
  }

  @override
  void dispose() {
    _nome.dispose();
    _email.dispose();
    _telefone.dispose();
    _nascimento.dispose();
    _emergenciaNome.dispose();
    _emergenciaTel.dispose();
    _diaVenc.dispose();
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
        title: Text('Novo Aluno', style: TextStyle(color: kText1, fontWeight: FontWeight.w700)),
      ),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            _section('Dados pessoais'),
            _field(_nome, 'Nome completo *', required: true),
            _field(_email, 'E-mail', keyboard: TextInputType.emailAddress),
            _field(_telefone, 'Telefone', keyboard: TextInputType.phone),
            _field(_nascimento, 'Data de nascimento (AAAA-MM-DD)'),
            const SizedBox(height: 16),
            _section('Contato de emergência'),
            _field(_emergenciaNome, 'Nome do contato'),
            _field(_emergenciaTel, 'Telefone do contato', keyboard: TextInputType.phone),
            const SizedBox(height: 16),
            _section('Plano financeiro'),
            if (_planos.isNotEmpty) ...[
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14),
                decoration: BoxDecoration(
                  color: kSurface,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: kBorder),
                ),
                child: DropdownButtonHideUnderline(
                  child: DropdownButton<String?>(
                    value: _planoId,
                    dropdownColor: kSurface,
                    hint: Text('Selecionar plano (opcional)', style: TextStyle(color: kText2, fontSize: 14)),
                    isExpanded: true,
                    items: [
                      DropdownMenuItem<String?>(value: null, child: Text('Sem plano', style: TextStyle(color: kText2))),
                      ..._planos.map((p) => DropdownMenuItem<String?>(
                            value: p['id'] as String?,
                            child: Text(p['nome'] ?? '', style: TextStyle(color: kText1)),
                          )),
                    ],
                    onChanged: (v) => setState(() => _planoId = v),
                  ),
                ),
              ),
              const SizedBox(height: 10),
            ],
            _field(_diaVenc, 'Dia de vencimento (1-31)', keyboard: TextInputType.number),
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
                    : const Text('Cadastrar aluno', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
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

  Widget _field(TextEditingController ctrl, String hint, {bool required = false, TextInputType? keyboard}) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: TextFormField(
          controller: ctrl,
          keyboardType: keyboard,
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
