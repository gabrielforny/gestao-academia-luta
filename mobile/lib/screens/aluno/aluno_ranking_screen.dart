import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/auth_storage.dart';
import '../../core/constants.dart';
import '../../core/widgets.dart';

class AlunoRankingScreen extends StatefulWidget {
  const AlunoRankingScreen({super.key});

  @override
  State<AlunoRankingScreen> createState() => _AlunoRankingScreenState();
}

class _AlunoRankingScreenState extends State<AlunoRankingScreen> {
  String? _meuId;
  List<Map<String, dynamic>> _ranking = [];
  bool _loading = true;
  bool _erro = false;

  @override
  void initState() {
    super.initState();
    _init();
  }

  Future<void> _init() async {
    final user = await AuthStorage.getUser();
    if (!mounted) return;
    _meuId = user?.id;
    await _loadRanking();
  }

  Future<void> _loadRanking() async {
    if (mounted) setState(() { _loading = true; _erro = false; });
    try {
      final res = await dio.get('/api/ranking/leaderboard/academia');
      final data = res.data as Map<String, dynamic>;
      final rawItems = data['items'] as List? ?? [];
      if (mounted) setState(() {
        _ranking = rawItems.cast<Map<String, dynamic>>();
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() { _loading = false; _erro = true; });
    }
  }

  bool _ehEu(Map<String, dynamic> r) =>
      r['alunoId'] == _meuId || r['id'] == _meuId;

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
              padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Ranking',
                            style: TextStyle(color: kText1, fontSize: 26, fontWeight: FontWeight.w900)),
                        if (_myPos > 0)
                          Text('Você está em ${_myPos.ordinal()} lugar',
                              style: TextStyle(color: kText2, fontSize: 12)),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => context.push('/aluno/ranking/conquistas'),
                    icon: Icon(Icons.military_tech_rounded, color: const Color(0xFFFFD700), size: 32),
                    tooltip: 'Minhas conquistas',
                  ),
                ],
              ),
            ),
            Expanded(
              child: _loading
                  ? Center(child: CircularProgressIndicator(color: kPrimary))
                  : _erro
                      ? ErroConexao(onRetry: _loadRanking)
                      : _buildRankingList(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRankingList() {
    final top3 = _ranking.take(3).toList();

    return RefreshIndicator(
      onRefresh: _loadRanking,
      color: kPrimary,
      child: ListView(
        physics: const AlwaysScrollableScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
        children: [
          if (_ranking.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 48),
              child: ListaVazia(
                icon: Icons.emoji_events_outlined,
                titulo: 'Ranking ainda não disponível',
                subtitulo: 'Registre presenças para aparecer aqui.',
              ),
            )
          else ...[
            if (top3.isNotEmpty)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: _Podium(top3: top3, meuId: _meuId, ehEu: _ehEu, faixaCor: _faixaCor, pts: _pts),
              ),

            Padding(
              padding: const EdgeInsets.fromLTRB(4, 16, 4, 12),
              child: Text('CLASSIFICAÇÃO GERAL',
                  style: TextStyle(
                      color: kText2, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1.2)),
            ),
            ..._ranking.asMap().entries.map((e) {
              final r = e.value;
              final pos = (r['posicao'] as num?)?.toInt() ?? (e.key + 1);
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
                      child: Text('#$pos',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              color: eu ? kPrimary : kText2,
                              fontSize: 13,
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
                          Text(r['faixaAtualNome'] as String,
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
        ],
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
