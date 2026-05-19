import 'package:flutter/material.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class AdminTurmaDetalheScreen extends StatefulWidget {
  final String turmaId;
  const AdminTurmaDetalheScreen({super.key, required this.turmaId});

  @override
  State<AdminTurmaDetalheScreen> createState() => _AdminTurmaDetalheScreenState();
}

class _AdminTurmaDetalheScreenState extends State<AdminTurmaDetalheScreen> with SingleTickerProviderStateMixin {
  late TabController _tabCtrl;
  final _ctrl = TextEditingController();

  Map<String, dynamic>? _turma;
  List<Map<String, dynamic>> _alunos = [];
  List<Map<String, dynamic>> _filtrados = [];
  // presença count por alunoId (da aba Alunos)
  Map<String, int> _presencaCount = {};

  // Aba Presença
  DateTime _dataSel = DateTime.now();
  Set<String> _presentesNaData = {};
  final Set<String> _marcando = {};

  bool _loading = true;
  bool _loadingPresenca = false;
  String? _erro;

  @override
  void initState() {
    super.initState();
    _tabCtrl = TabController(length: 2, vsync: this);
    _tabCtrl.addListener(() {
      if (_tabCtrl.index == 1 && !_tabCtrl.indexIsChanging) _loadPresencaData();
    });
    _ctrl.addListener(_filtrar);
    _load();
  }

  @override
  void dispose() {
    _tabCtrl.dispose();
    _ctrl.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    setState(() { _loading = true; _erro = null; });
    try {
      final hoje = DateTime.now();
      final ate = '${hoje.year}-${hoje.month.toString().padLeft(2, '0')}-${hoje.day.toString().padLeft(2, '0')}';
      final deDate = hoje.subtract(const Duration(days: 180));
      final de = '${deDate.year}-${deDate.month.toString().padLeft(2, '0')}-${deDate.day.toString().padLeft(2, '0')}';

      final futures = await Future.wait([
        dio.get('/api/turmas/${widget.turmaId}'),
        dio.get('/api/presencas/relatorio', queryParameters: {
          'turmaId': widget.turmaId,
          'de': de,
          'ate': ate,
        }),
      ]);

      final turmaBody = futures[0].data as Map<String, dynamic>;
      final dados = turmaBody['dados'] as Map<String, dynamic>?;
      if (dados == null) throw Exception('Turma não encontrada');
      final alunosList = (dados['alunos'] as List? ?? []).cast<Map<String, dynamic>>();

      // Monta mapa de presença por alunoId
      final relatorio = futures[1].data['dados'] as Map<String, dynamic>?;
      final relAlunos = (relatorio?['alunos'] as List? ?? []).cast<Map<String, dynamic>>();
      final countMap = <String, int>{};
      for (final ra in relAlunos) {
        final id = ra['alunoId']?.toString() ?? '';
        countMap[id] = (ra['presencas'] as num?)?.toInt() ?? 0;
      }

      if (mounted) {
        setState(() {
          _turma = dados;
          _alunos = alunosList;
          _presencaCount = countMap;
          _filtrar();
        });
      }
    } catch (e) {
      if (mounted) setState(() => _erro = 'Erro ao carregar turma');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _filtrar() {
    final q = _ctrl.text.trim().toLowerCase();
    setState(() {
      _filtrados = q.isEmpty
          ? List.from(_alunos)
          : _alunos.where((a) {
              final nome = (a['nomeAluno'] as String? ?? '').toLowerCase();
              return nome.contains(q);
            }).toList();
    });
  }

  // ── Aba Presença ─────────────────────────────────────

  String get _dataStr =>
      '${_dataSel.year}-${_dataSel.month.toString().padLeft(2, '0')}-${_dataSel.day.toString().padLeft(2, '0')}';

  String get _dataLabel {
    final hoje = DateTime.now();
    final diff = DateTime(hoje.year, hoje.month, hoje.day)
        .difference(DateTime(_dataSel.year, _dataSel.month, _dataSel.day))
        .inDays;
    if (diff == 0) return 'Hoje';
    if (diff == 1) return 'Ontem';
    return '${_dataSel.day.toString().padLeft(2, '0')}/${_dataSel.month.toString().padLeft(2, '0')}/${_dataSel.year}';
  }

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _dataSel,
      firstDate: DateTime.now().subtract(const Duration(days: 365)),
      lastDate: DateTime.now(),
      builder: (ctx, child) => Theme(
        data: ThemeData.dark().copyWith(
          colorScheme: ColorScheme.dark(primary: kPrimary, surface: kSurface),
        ),
        child: child!,
      ),
    );
    if (picked != null && mounted) {
      setState(() { _dataSel = picked; _presentesNaData.clear(); });
      _loadPresencaData();
    }
  }

  void _prevDay() {
    setState(() { _dataSel = _dataSel.subtract(const Duration(days: 1)); _presentesNaData.clear(); });
    _loadPresencaData();
  }

  void _nextDay() {
    final hoje = DateTime.now();
    final amanha = DateTime(hoje.year, hoje.month, hoje.day + 1);
    if (_dataSel.isBefore(amanha)) {
      setState(() { _dataSel = _dataSel.add(const Duration(days: 1)); _presentesNaData.clear(); });
      _loadPresencaData();
    }
  }

  bool get _isHoje {
    final hoje = DateTime.now();
    return _dataSel.year == hoje.year && _dataSel.month == hoje.month && _dataSel.day == hoje.day;
  }

  Future<void> _loadPresencaData() async {
    setState(() => _loadingPresenca = true);
    try {
      // Buscar o horarioId do dia da semana selecionado
      final horarios = (_turma?['horarios'] as List? ?? []).cast<Map<String, dynamic>>();
      final diaSemana = _dataSel.weekday % 7; // 0=Dom,1=Seg,...,6=Sab (mesmo que DiaSemana do backend)
      final horario = horarios.firstWhere(
        (h) => (h['diaSemana'] as num?)?.toInt() == diaSemana,
        orElse: () => horarios.isNotEmpty ? horarios.first : {},
      );
      final horarioId = horario['id']?.toString() ?? '';
      if (horarioId.isEmpty) {
        if (mounted) setState(() { _presentesNaData = {}; _loadingPresenca = false; });
        return;
      }
      final res = await dio.get('/api/presencas/aula', queryParameters: {'horarioId': horarioId, 'data': _dataStr});
      final lista = (res.data['dados'] as List? ?? []).cast<Map<String, dynamic>>();
      final presentes = lista.map((p) => (p['alunoId'] ?? '').toString()).toSet();
      if (mounted) setState(() => _presentesNaData = presentes);
    } catch (_) {} finally {
      if (mounted) setState(() => _loadingPresenca = false);
    }
  }

  Future<void> _marcarPresenca(String alunoId) async {
    if (_marcando.contains(alunoId)) return;
    setState(() => _marcando.add(alunoId));
    try {
      await dio.post('/api/presencas', data: {
        'alunoId': alunoId,
        'turmaId': widget.turmaId,
        'data': _dataStr,
      });
      if (mounted) {
        setState(() => _presentesNaData.add(alunoId));
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: const Text('Presença registrada!'), backgroundColor: kSuccess, behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 2)),
        );
      }
    } catch (e) {
      String msg = 'Erro ao registrar presença.';
      try { msg = ((e as dynamic).response?.data as Map?)?['mensagem'] ?? msg; } catch (_) {}
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(msg), backgroundColor: kDanger, behavior: SnackBarBehavior.floating),
      );
    } finally {
      if (mounted) setState(() => _marcando.remove(alunoId));
    }
  }

  @override
  Widget build(BuildContext context) {
    final t = _turma;
    return Scaffold(
      backgroundColor: kBg,
      appBar: AppBar(
        backgroundColor: kSurface,
        foregroundColor: kText1,
        elevation: 0,
        title: Text(t?['nome'] ?? 'Turma', style: TextStyle(color: kText1, fontWeight: FontWeight.w700)),
        bottom: TabBar(
          controller: _tabCtrl,
          labelColor: kPrimary,
          unselectedLabelColor: kText2,
          indicatorColor: kPrimary,
          tabs: const [
            Tab(text: 'Alunos'),
            Tab(text: 'Presença'),
          ],
        ),
      ),
      body: _loading
          ? Center(child: CircularProgressIndicator(color: kPrimary))
          : _erro != null
              ? Center(child: Text(_erro!, style: TextStyle(color: kDanger)))
              : TabBarView(
                  controller: _tabCtrl,
                  children: [
                    _abaAlunos(),
                    _abaPresenca(),
                  ],
                ),
    );
  }

  // ── ABA ALUNOS ────────────────────────────────────────

  Widget _abaAlunos() {
    final t = _turma;
    return Column(
      children: [
        if (t != null) _buildHeader(t),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
          child: TextField(
            controller: _ctrl,
            style: TextStyle(color: kText1),
            decoration: InputDecoration(
              hintText: 'Buscar aluno...',
              hintStyle: TextStyle(color: kText2),
              prefixIcon: Icon(Icons.search, color: kText2),
              filled: true,
              fillColor: kSurface,
              contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kBorder)),
              focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: kPrimary)),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
          child: Row(
            children: [
              Text('Alunos matriculados', style: TextStyle(color: kText2, fontSize: 13, fontWeight: FontWeight.w600)),
              const Spacer(),
              Text('${_filtrados.length}', style: TextStyle(color: kPrimary, fontSize: 13, fontWeight: FontWeight.w700)),
            ],
          ),
        ),
        Expanded(
          child: _filtrados.isEmpty
              ? Center(child: Text('Nenhum aluno matriculado.', style: TextStyle(color: kText2)))
              : RefreshIndicator(
                  onRefresh: _load,
                  child: ListView.builder(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    itemCount: _filtrados.length,
                    itemBuilder: (_, i) => _buildAlunoCard(_filtrados[i]),
                  ),
                ),
        ),
      ],
    );
  }

  Widget _buildHeader(Map<String, dynamic> t) {
    final ativa = t['ativo'] == true;
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 12, 16, 0),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: kSurface, borderRadius: BorderRadius.circular(14), border: Border.all(color: kBorder)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if ((t['modalidadeNome'] as String?)?.isNotEmpty == true)
                      Text(t['modalidadeNome'], style: TextStyle(color: kText2, fontSize: 12)),
                    if ((t['professorNome'] as String?)?.isNotEmpty == true)
                      Text('Prof. ${t['professorNome']}', style: TextStyle(color: kPrimary, fontSize: 13, fontWeight: FontWeight.w600)),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: ativa ? kSuccess.withOpacity(0.15) : kText2.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text(ativa ? 'Ativa' : 'Inativa',
                    style: TextStyle(color: ativa ? kSuccess : kText2, fontSize: 11, fontWeight: FontWeight.w700)),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            '${t['totalAlunos'] ?? _alunos.length} / ${t['capacidadeMaxima'] ?? 0} alunos',
            style: TextStyle(color: kText1, fontSize: 13, fontWeight: FontWeight.w600),
          ),
        ],
      ),
    );
  }

  Widget _buildAlunoCard(Map<String, dynamic> a) {
    final alunoId = a['alunoId']?.toString() ?? '';
    final nome = a['nomeAluno'] as String? ?? '';
    final count = _presencaCount[alunoId] ?? 0;
    final initials = nome.trim().split(RegExp(r'\s+')).take(2).map((w) => w.isNotEmpty ? w[0] : '').join().toUpperCase();

    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: kSurface, borderRadius: BorderRadius.circular(12), border: Border.all(color: kBorder)),
      child: Row(
        children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: kPrimary.withOpacity(0.2),
            child: Text(initials.isEmpty ? '?' : initials,
                style: TextStyle(color: kPrimary, fontSize: 13, fontWeight: FontWeight.w800)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(nome, style: TextStyle(color: kText1, fontSize: 14, fontWeight: FontWeight.w600)),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(color: kPrimary.withOpacity(0.1), borderRadius: BorderRadius.circular(8)),
            child: Column(
              children: [
                Text('$count', style: TextStyle(color: kPrimary, fontSize: 15, fontWeight: FontWeight.w800)),
                Text('presenças', style: TextStyle(color: kText2, fontSize: 9)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // ── ABA PRESENÇA ──────────────────────────────────────

  Widget _abaPresenca() {
    return Column(
      children: [
        // Seletor de data — setas prev/next + toque no centro abre calendário
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 16, 16, 0),
          child: Container(
            decoration: BoxDecoration(
              color: kSurface,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: kPrimary.withOpacity(0.4)),
            ),
            child: Row(
              children: [
                IconButton(
                  onPressed: _prevDay,
                  icon: Icon(Icons.chevron_left_rounded, color: kPrimary, size: 26),
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  constraints: const BoxConstraints(),
                ),
                Expanded(
                  child: GestureDetector(
                    onTap: _pickDate,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 14),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.calendar_today_rounded, color: kPrimary, size: 16),
                          const SizedBox(width: 8),
                          Text(_dataLabel, style: TextStyle(color: kPrimary, fontSize: 15, fontWeight: FontWeight.w700)),
                        ],
                      ),
                    ),
                  ),
                ),
                IconButton(
                  onPressed: _isHoje ? null : _nextDay,
                  icon: Icon(Icons.chevron_right_rounded, color: _isHoje ? kBorder : kPrimary, size: 26),
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  constraints: const BoxConstraints(),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 8),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
          child: Row(
            children: [
              Text('Marque quem compareceu', style: TextStyle(color: kText2, fontSize: 13, fontWeight: FontWeight.w600)),
              const Spacer(),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: kSuccess.withOpacity(0.1), borderRadius: BorderRadius.circular(8)),
                child: Text('${_presentesNaData.length} presente(s)', style: TextStyle(color: kSuccess, fontSize: 12, fontWeight: FontWeight.w700)),
              ),
            ],
          ),
        ),
        if (_loadingPresenca)
          const Padding(padding: EdgeInsets.all(20), child: CircularProgressIndicator())
        else
          Expanded(
            child: _alunos.isEmpty
                ? Center(child: Text('Nenhum aluno matriculado.', style: TextStyle(color: kText2)))
                : ListView.builder(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    itemCount: _alunos.length,
                    itemBuilder: (_, i) => _buildPresencaCard(_alunos[i]),
                  ),
          ),
      ],
    );
  }

  Widget _buildPresencaCard(Map<String, dynamic> a) {
    final alunoId = a['alunoId']?.toString() ?? '';
    final nome = a['nomeAluno'] as String? ?? '';
    final presente = _presentesNaData.contains(alunoId);
    final carregando = _marcando.contains(alunoId);
    final initials = nome.trim().split(RegExp(r'\s+')).take(2).map((w) => w.isNotEmpty ? w[0] : '').join().toUpperCase();

    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: presente ? kSuccess.withOpacity(0.05) : kSurface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: presente ? kSuccess.withOpacity(0.4) : kBorder),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: presente ? kSuccess.withOpacity(0.2) : kPrimary.withOpacity(0.2),
            child: Text(initials.isEmpty ? '?' : initials,
                style: TextStyle(color: presente ? kSuccess : kPrimary, fontSize: 13, fontWeight: FontWeight.w800)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(nome, style: TextStyle(color: kText1, fontSize: 14, fontWeight: FontWeight.w600)),
          ),
          if (presente)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(color: kSuccess.withOpacity(0.15), borderRadius: BorderRadius.circular(8)),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.check_circle_rounded, color: kSuccess, size: 14),
                  const SizedBox(width: 4),
                  Text('Presente', style: TextStyle(color: kSuccess, fontSize: 12, fontWeight: FontWeight.w700)),
                ],
              ),
            )
          else
            SizedBox(
              height: 34,
              child: ElevatedButton(
                onPressed: carregando ? null : () => _marcarPresenca(alunoId),
                style: ElevatedButton.styleFrom(
                  backgroundColor: kPrimary,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  textStyle: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700),
                ),
                child: carregando
                    ? const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Text('Marcar'),
              ),
            ),
        ],
      ),
    );
  }
}
