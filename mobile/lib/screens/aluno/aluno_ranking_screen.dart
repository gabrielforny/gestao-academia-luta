import 'package:flutter/material.dart';
import '../../core/api_client.dart';
import '../../core/auth_storage.dart';
import '../../core/constants.dart';
import '../../core/widgets.dart';

class AlunoRankingScreen extends StatefulWidget {
  const AlunoRankingScreen({super.key});

  @override
  State<AlunoRankingScreen> createState() => _AlunoRankingScreenState();
}

class _AlunoRankingScreenState extends State<AlunoRankingScreen>
    with SingleTickerProviderStateMixin {
  late final TabController _tabCtrl;

  String? _meuId;
  List<Map<String, dynamic>> _turmas = [];
  int _turmaIdx = 0;

  List<Map<String, dynamic>> _ranking = [];
  bool _loadingRanking = true;
  bool _erroRanking = false;

  List<Map<String, dynamic>> _conquistas = [];
  bool _loadingConquistas = true;

  @override
  void initState() {
    super.initState();
    _tabCtrl = TabController(length: 2, vsync: this);
    _tabCtrl.addListener(() { if (mounted) setState(() {}); });
    _init();
  }

  @override
  void dispose() {
    _tabCtrl.dispose();
    super.dispose();
  }

  Future<void> _init() async {
    final user = await AuthStorage.getUser();
    if (!mounted) return;
    _meuId = user?.id;
    await Future.wait([
      _loadTurmasERanking(),
      if (_meuId != null) _loadConquistas(),
    ]);
  }

  Future<void> _loadTurmasERanking() async {
    try {
      final res = await dio.get('/api/alunos/me');
      final dados = res.data['dados'] as Map<String, dynamic>?;
      final raw = (dados?['turmasDetalhes'] as List? ?? []).cast<Map<String, dynamic>>();
      if (mounted) setState(() => _turmas = raw);
      if (raw.isNotEmpty) {
        await _loadRanking(raw[0]['id']?.toString() ?? '');
      } else {
        if (mounted) setState(() => _loadingRanking = false);
      }
    } catch (_) {
      if (mounted) setState(() { _loadingRanking = false; _erroRanking = true; });
    }
  }

  Future<void> _loadRanking(String turmaId) async {
    if (mounted) setState(() { _loadingRanking = true; _erroRanking = false; });
    try {
      final res = await dio.get('/api/ranking/leaderboard/turma/$turmaId');
      final data = res.data as Map<String, dynamic>;
      final rawItems = data['items'] ?? (data['dados'] as Map?)?['items'] ?? [];
      if (mounted) setState(() {
        _ranking = (rawItems as List).cast<Map<String, dynamic>>();
        _loadingRanking = false;
      });
    } catch (_) {
      if (mounted) setState(() { _loadingRanking = false; _erroRanking = true; });
    }
  }

  Future<void> _loadConquistas() async {
    try {
      final res = await dio.get('/api/ranking/conquistas/$_meuId');
      final data = res.data as Map<String, dynamic>;
      final raw = data['dados'] is List
          ? data['dados'] as List
          : (data['dados'] as Map?)?['items'] as List? ?? data['items'] as List? ?? [];
      if (mounted) setState(() {
        _conquistas = raw.cast<Map<String, dynamic>>();
        _loadingConquistas = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loadingConquistas = false);
    }
  }

  bool _ehEu(Map<String, dynamic> r) =>
      r['usuarioId'] == _meuId || r['alunoId'] == _meuId || r['id'] == _meuId;

  Color _faixaCor(String? hex) {
    if (hex == null || hex.isEmpty) return kPrimary;
    try { return Color(int.parse(hex.replaceAll('#', '0xFF'))); }
    catch (_) { return kPrimary; }
  }

  String _nome(Map<String, dynamic> r) => r['nomeAluno'] ?? r['nome'] ?? '—';
  int _pts(Map<String, dynamic> r) =>
      (r['xpTotal'] as num?)?.toInt() ?? (r['xpPeriodo'] as num?)?.toInt() ?? 0;

  int get _myPos {
    for (var i = 0; i < _ranking.length; i++) {
      if (_ehEu(_ranking[i])) return i + 1;
    }
    return -1;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 20, 20, 4),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Ranking',
                            style: TextStyle(color: kText1, fontSize: 26, fontWeight: FontWeight.w900)),
                        if (_myPos > 0 && _tabCtrl.index == 0)
                          Text('Você está em ${_myPos.ordinal()} lugar na turma',
                              style: TextStyle(color: kText2, fontSize: 12)),
                      ],
                    ),
                  ),
                  Icon(Icons.emoji_events_rounded, color: const Color(0xFFFFD700), size: 32),
                ],
              ),
            ),
            TabBar(
              controller: _tabCtrl,
              labelColor: kPrimary,
              unselectedLabelColor: kText2,
              indicatorColor: kPrimary,
              dividerColor: kBorder,
              tabs: const [
                Tab(text: 'Ranking da Turma'),
                Tab(text: 'Conquistas'),
              ],
            ),
            Expanded(
              child: TabBarView(
                controller: _tabCtrl,
                children: [
                  _buildRankingTab(),
                  _buildConquistasTab(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRankingTab() {
    if (_loadingRanking && _turmas.isEmpty) {
      return Center(child: CircularProgressIndicator(color: kPrimary));
    }
    if (_erroRanking && _ranking.isEmpty) {
      return ErroConexao(onRetry: () async {
        if (_turmas.isNotEmpty) {
          await _loadRanking(_turmas[_turmaIdx]['id']?.toString() ?? '');
        }
      });
    }

    final top3 = _ranking.take(3).toList();
    final rest = _ranking.length > 3 ? _ranking.sublist(3) : <Map<String, dynamic>>[];

    return RefreshIndicator(
      onRefresh: () async {
        if (_turmas.isNotEmpty) {
          await _loadRanking(_turmas[_turmaIdx]['id']?.toString() ?? '');
        }
      },
      color: kPrimary,
      child: ListView(
        physics: const AlwaysScrollableScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
        children: [
          // Sem turma
          if (_turmas.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 48),
              child: ListaVazia(
                icon: Icons.groups_outlined,
                titulo: 'Sem turma matriculada',
                subtitulo: 'Fale com a secretaria para se matricular.',
              ),
            ),

          // Seletor de turma (múltiplas)
          if (_turmas.length > 1) ...[
            SizedBox(
              height: 36,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: _turmas.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (_, i) {
                  final sel = i == _turmaIdx;
                  return GestureDetector(
                    onTap: () async {
                      setState(() => _turmaIdx = i);
                      await _loadRanking(_turmas[i]['id']?.toString() ?? '');
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 5),
                      decoration: BoxDecoration(
                        color: sel ? kPrimary.withOpacity(0.15) : kSurface,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(color: sel ? kPrimary : kBorder),
                      ),
                      child: Text(
                        _turmas[i]['nome'] as String? ?? 'Turma',
                        style: TextStyle(
                          color: sel ? kPrimary : kText2,
                          fontSize: 13,
                          fontWeight: sel ? FontWeight.w700 : FontWeight.w400,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
            const SizedBox(height: 16),
          ],

          // Nome da turma (única)
          if (_turmas.length == 1) ...[
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
              decoration: BoxDecoration(
                color: kSurface,
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: kBorder),
              ),
              child: Row(children: [
                Icon(Icons.groups_rounded, color: kPrimary, size: 16),
                const SizedBox(width: 8),
                Text(
                  _turmas[0]['nome'] as String? ?? 'Turma',
                  style: TextStyle(color: kText1, fontSize: 13, fontWeight: FontWeight.w600),
                ),
              ]),
            ),
            const SizedBox(height: 16),
          ],

          // Loading do ranking
          if (_loadingRanking)
            const Padding(
              padding: EdgeInsets.only(top: 32),
              child: Center(child: CircularProgressIndicator()),
            )
          else ...[
            // Pódio
            if (top3.isNotEmpty)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: _Podium(top3: top3, meuId: _meuId, ehEu: _ehEu, faixaCor: _faixaCor, pts: _pts),
              ),

            // Restante da lista
            if (rest.isNotEmpty) ...[
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 16, 4, 12),
                child: Text('CLASSIFICAÇÃO GERAL',
                    style: TextStyle(
                        color: kText2, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1.2)),
              ),
              ...rest.asMap().entries.map((e) {
                final r = e.value;
                final pos = e.key + 4;
                final eu = _ehEu(r);
                return Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: eu ? kPrimary.withOpacity(0.12) : kSurface,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: eu ? kPrimary.withOpacity(0.4) : kBorder),
                    ),
                    child: Row(children: [
                      SizedBox(
                        width: 32,
                        child: Text('$pos',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                                color: eu ? kPrimary : kText2,
                                fontSize: 14,
                                fontWeight: FontWeight.w800)),
                      ),
                      const SizedBox(width: 10),
                      CircleAvatar(
                        radius: 18,
                        backgroundColor: _faixaCor(r['faixaAtualCor'] as String?).withOpacity(0.25),
                        child: Text(
                          _nome(r).isNotEmpty ? _nome(r)[0].toUpperCase() : '?',
                          style: TextStyle(
                              color: _faixaCor(r['faixaAtualCor'] as String?),
                              fontSize: 14,
                              fontWeight: FontWeight.w800),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(
                            _nome(r) + (eu ? ' (você)' : ''),
                            style: TextStyle(
                                color: eu ? kPrimary : kText1,
                                fontSize: 14,
                                fontWeight: FontWeight.w700),
                          ),
                          if (r['faixaAtualNome'] != null)
                            Text(r['faixaAtualNome'],
                                style: TextStyle(color: kText2, fontSize: 12)),
                        ]),
                      ),
                      Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                        Text('${_pts(r)}',
                            style: TextStyle(
                                color: eu ? kPrimary : kText1,
                                fontSize: 15,
                                fontWeight: FontWeight.w800)),
                        Text('pts', style: TextStyle(color: kText2, fontSize: 10)),
                      ]),
                    ]),
                  ),
                );
              }),
            ],

            if (_ranking.isEmpty && _turmas.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 48),
                child: ListaVazia(
                  icon: Icons.emoji_events_outlined,
                  titulo: 'Ranking ainda não disponível',
                  subtitulo: 'Registre presenças para aparecer aqui.',
                ),
              ),
          ],
        ],
      ),
    );
  }

  Widget _buildConquistasTab() {
    if (_loadingConquistas) {
      return Center(child: CircularProgressIndicator(color: kPrimary));
    }

    if (_conquistas.isEmpty) {
      return ListaVazia(
        icon: Icons.military_tech_outlined,
        titulo: 'Nenhuma conquista ainda',
        subtitulo: 'Continue treinando para desbloquear!',
      );
    }

    final unlocked = _conquistas.where((c) => c['desbloqueada'] == true).toList();
    final locked = _conquistas.where((c) => c['desbloqueada'] != true).toList();

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
      children: [
        if (unlocked.isNotEmpty) ...[
          _secLabel('DESBLOQUEADAS (${unlocked.length})'),
          const SizedBox(height: 8),
          ...unlocked.map((c) => _conquistaCard(c, desbloqueada: true)),
          const SizedBox(height: 20),
        ],
        if (locked.isNotEmpty) ...[
          _secLabel('BLOQUEADAS (${locked.length})'),
          const SizedBox(height: 8),
          ...locked.map((c) => _conquistaCard(c, desbloqueada: false)),
        ],
      ],
    );
  }

  Widget _secLabel(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 2),
        child: Text(t,
            style: TextStyle(
                color: kText2, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1.2)),
      );

  Widget _conquistaCard(Map<String, dynamic> c, {required bool desbloqueada}) {
    final tipo = c['tipo']?.toString() ?? '';
    final nome = c['nome']?.toString() ?? '';
    final descricao = c['descricao']?.toString() ?? '';
    final bonusXp = (c['bonusXp'] as num?)?.toInt() ?? 0;

    IconData icon;
    Color iconColor;
    if (tipo.contains('presenca') || tipo.contains('frequencia')) {
      icon = Icons.check_circle_rounded;
      iconColor = kSuccess;
    } else if (tipo.contains('sequencia') || tipo.contains('streak')) {
      icon = Icons.local_fire_department_rounded;
      iconColor = kWarning;
    } else if (tipo.contains('graduacao') || tipo.contains('faixa')) {
      icon = Icons.military_tech_rounded;
      iconColor = const Color(0xFFFFD700);
    } else {
      icon = Icons.emoji_events_rounded;
      iconColor = kPrimary;
    }

    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Opacity(
        opacity: desbloqueada ? 1.0 : 0.42,
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: kSurface,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
                color: desbloqueada ? iconColor.withOpacity(0.3) : kBorder),
          ),
          child: Row(children: [
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: iconColor.withOpacity(0.12),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(
                desbloqueada ? icon : Icons.lock_rounded,
                color: desbloqueada ? iconColor : kText2,
                size: 22,
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(nome.isNotEmpty ? nome : descricao,
                    style: TextStyle(
                        color: kText1, fontSize: 13, fontWeight: FontWeight.w700)),
                if (descricao.isNotEmpty && descricao != nome)
                  Text(descricao,
                      style: TextStyle(color: kText2, fontSize: 11),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis),
              ]),
            ),
            if (bonusXp > 0) ...[
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: iconColor.withOpacity(0.12),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text('+$bonusXp XP',
                    style: TextStyle(
                        color: iconColor, fontSize: 11, fontWeight: FontWeight.w700)),
              ),
            ],
          ]),
        ),
      ),
    );
  }
}

class _Podium extends StatelessWidget {
  const _Podium({
    required this.top3,
    required this.meuId,
    required this.ehEu,
    required this.faixaCor,
    required this.pts,
  });

  final List<Map<String, dynamic>> top3;
  final String? meuId;
  final bool Function(Map<String, dynamic>) ehEu;
  final Color Function(String?) faixaCor;
  final int Function(Map<String, dynamic>) pts;

  String _nome(Map<String, dynamic> r) => r['nomeAluno'] ?? r['nome'] ?? '—';

  @override
  Widget build(BuildContext context) {
    final p1 = top3.isNotEmpty ? top3[0] : null;
    final p2 = top3.length > 1 ? top3[1] : null;
    final p3 = top3.length > 2 ? top3[2] : null;

    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Expanded(child: p2 != null ? _item(p2, 2, 80, const Color(0xFFC0C0C0)) : const SizedBox()),
        const SizedBox(width: 8),
        Expanded(child: p1 != null ? _item(p1, 1, 110, const Color(0xFFFFD700)) : const SizedBox()),
        const SizedBox(width: 8),
        Expanded(child: p3 != null ? _item(p3, 3, 60, const Color(0xFFCD7F32)) : const SizedBox()),
      ],
    );
  }

  Widget _item(Map<String, dynamic> r, int pos, double h, Color medalColor) {
    final eu = ehEu(r);
    final cor = faixaCor(r['faixaAtualCor'] as String?);
    final nome = _nome(r);
    final primeiroNome = nome.split(' ').first;

    return Column(
      children: [
        if (pos == 1)
          Icon(Icons.emoji_events_rounded, color: medalColor, size: 28)
        else
          const SizedBox(height: 28),
        const SizedBox(height: 4),
        Stack(
          children: [
            CircleAvatar(
              radius: pos == 1 ? 30 : 24,
              backgroundColor: cor.withOpacity(0.25),
              child: Text(
                nome.isNotEmpty ? nome[0].toUpperCase() : '?',
                style: TextStyle(
                    color: eu ? kPrimary : cor,
                    fontSize: pos == 1 ? 22 : 18,
                    fontWeight: FontWeight.w900),
              ),
            ),
            if (eu)
              Positioned(
                right: 0,
                bottom: 0,
                child: Container(
                  width: 14,
                  height: 14,
                  decoration: BoxDecoration(
                      color: kPrimary,
                      shape: BoxShape.circle,
                      border: Border.all(color: kBg, width: 2)),
                ),
              ),
          ],
        ),
        const SizedBox(height: 6),
        Text(
          primeiroNome,
          style: TextStyle(
              color: eu ? kPrimary : kText1,
              fontSize: pos == 1 ? 13 : 12,
              fontWeight: FontWeight.w700),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          textAlign: TextAlign.center,
        ),
        Text('${pts(r)} pts', style: TextStyle(color: kText2, fontSize: 11)),
        const SizedBox(height: 4),
        Container(
          height: h,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [medalColor.withOpacity(0.3), medalColor.withOpacity(0.1)],
            ),
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(8),
              topRight: Radius.circular(8),
            ),
            border: Border.all(color: medalColor.withOpacity(0.4)),
          ),
          child: Center(
            child: Text('$pos',
                style: TextStyle(color: medalColor, fontSize: 28, fontWeight: FontWeight.w900)),
          ),
        ),
      ],
    );
  }
}

extension on int {
  String ordinal() {
    if (this == 1) return '1º';
    if (this == 2) return '2º';
    if (this == 3) return '3º';
    return '${this}º';
  }
}
