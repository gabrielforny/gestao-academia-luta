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

class _AlunoRankingScreenState extends State<AlunoRankingScreen> {
  List<Map<String, dynamic>> _ranking = [];
  String? _meuId;
  bool _loading = true;
  bool _erro = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final results = await Future.wait([
        dio.get('/api/ranking/leaderboard/academia'),
        AuthStorage.getUser(),
      ]);
      final body = results[0] as dynamic;
      final user = results[1] as StoredUser?;
      final rawItems = body.data['items'];
      final list = rawItems is List ? rawItems : [];
      if (mounted) {
        setState(() {
          _ranking = list.cast<Map<String, dynamic>>();
          _meuId = user?.id;
        });
      }
    } catch (_) {
      if (mounted) setState(() => _erro = true);
    } finally {
      if (mounted) setState(() => _loading = false);
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
  int _xp(Map<String, dynamic> r) => (r['xpTotal'] as num?)?.toInt() ?? (r['xpPeriodo'] as num?)?.toInt() ?? 0;

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return Scaffold(backgroundColor: kBg, body: Center(child: CircularProgressIndicator(color: kPrimary)));
    }
    if (_erro && _ranking.isEmpty) {
      return Scaffold(backgroundColor: kBg, body: SafeArea(child: ErroConexao(onRetry: () { setState(() { _loading = true; _erro = false; }); _load(); })));
    }

    final top3 = _ranking.take(3).toList();
    final rest = _ranking.length > 3 ? _ranking.sublist(3) : <Map<String, dynamic>>[];

    // My position
    int myPos = -1;
    for (var i = 0; i < _ranking.length; i++) {
      if (_ehEu(_ranking[i])) { myPos = i + 1; break; }
    }

    return Scaffold(
      backgroundColor: kBg,
      body: RefreshIndicator(
        onRefresh: _load,
        color: kPrimary,
        child: SafeArea(
          child: CustomScrollView(
            physics: const AlwaysScrollableScrollPhysics(),
            slivers: [
            // ── Header ──────────────────────────────────
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 24, 20, 4),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Ranking',
                              style: TextStyle(color: kText1, fontSize: 26, fontWeight: FontWeight.w900)),
                          if (myPos > 0)
                            Text('Você está em ${myPos.ordinal()} lugar',
                                style: TextStyle(color: kText2, fontSize: 13)),
                        ],
                      ),
                    ),
                    Icon(Icons.emoji_events_rounded, color: const Color(0xFFFFD700), size: 32),
                  ],
                ),
              ),
            ),

            // ── Podium top 3 ─────────────────────────────
            if (top3.isNotEmpty)
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 24, 16, 0),
                  child: _Podium(top3: top3, meuId: _meuId, ehEu: _ehEu, faixaCor: _faixaCor),
                ),
              ),

            // ── Rest of list ──────────────────────────────
            if (rest.isNotEmpty) ...[
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 28, 20, 12),
                  child: Text('CLASSIFICAÇÃO GERAL',
                      style: TextStyle(color: kText2, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1.2)),
                ),
              ),
              SliverList(
                delegate: SliverChildBuilderDelegate(
                  (_, i) {
                    final r = rest[i];
                    final pos = i + 4;
                    final ehEu = _ehEu(r);

                    return Padding(
                      padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                      child: Container(
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: ehEu ? kPrimary.withOpacity(0.12) : kSurface,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: ehEu ? kPrimary.withOpacity(0.4) : kBorder),
                        ),
                        child: Row(
                          children: [
                            SizedBox(
                              width: 32,
                              child: Text(
                                '$pos',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: ehEu ? kPrimary : kText2,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w800,
                                ),
                              ),
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
                                  fontWeight: FontWeight.w800,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    _nome(r) + (ehEu ? ' (você)' : ''),
                                    style: TextStyle(
                                      color: ehEu ? kPrimary : kText1,
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                    ),
                                  ),
                                  if (r['faixaAtualNome'] != null)
                                    Text(r['faixaAtualNome'],
                                        style: TextStyle(color: kText2, fontSize: 12)),
                                ],
                              ),
                            ),
                            Text('${_xp(r)} XP',
                                style: TextStyle(
                                  color: ehEu ? kPrimary : kText1,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w800,
                                )),
                          ],
                        ),
                      ),
                    );
                  },
                  childCount: rest.length,
                ),
              ),
            ],

            if (_ranking.isEmpty)
              SliverToBoxAdapter(
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.all(48),
                    child: Column(children: [
                      Icon(Icons.emoji_events_outlined, color: kBorder, size: 64),
                      const SizedBox(height: 16),
                      Text('Ranking ainda não disponível',
                          style: TextStyle(color: kText2, fontSize: 14), textAlign: TextAlign.center),
                    ]),
                  ),
                ),
              ),

            const SliverToBoxAdapter(child: SizedBox(height: 24)),
          ],
        ),
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
  });

  final List<Map<String, dynamic>> top3;
  final String? meuId;
  final bool Function(Map<String, dynamic>) ehEu;
  final Color Function(String?) faixaCor;

  String _nome(Map<String, dynamic> r) => r['nomeAluno'] ?? r['nome'] ?? '—';
  int _xp(Map<String, dynamic> r) => (r['xpTotal'] as num?)?.toInt() ?? (r['xpPeriodo'] as num?)?.toInt() ?? 0;

  @override
  Widget build(BuildContext context) {
    // Order: 2nd, 1st, 3rd for podium display
    final p1 = top3.isNotEmpty ? top3[0] : null;
    final p2 = top3.length > 1 ? top3[1] : null;
    final p3 = top3.length > 2 ? top3[2] : null;

    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        // 2nd place
        Expanded(child: p2 != null ? _podiumItem(p2, 2, 80, const Color(0xFFC0C0C0)) : const SizedBox()),
        const SizedBox(width: 8),
        // 1st place
        Expanded(child: p1 != null ? _podiumItem(p1, 1, 110, const Color(0xFFFFD700)) : const SizedBox()),
        const SizedBox(width: 8),
        // 3rd place
        Expanded(child: p3 != null ? _podiumItem(p3, 3, 60, const Color(0xFFCD7F32)) : const SizedBox()),
      ],
    );
  }

  Widget _podiumItem(Map<String, dynamic> r, int pos, double height, Color medalColor) {
    final eu = ehEu(r);
    final cor = faixaCor(r['faixaAtualCor'] as String?);
    final nome = _nome(r);
    final firstLetter = nome.isNotEmpty ? nome[0].toUpperCase() : '?';
    final primeiroNome = nome.split(' ').first;

    return Column(
      children: [
        // Crown for 1st
        if (pos == 1)
          Icon(Icons.emoji_events_rounded, color: medalColor, size: 28)
        else
          const SizedBox(height: 28),
        const SizedBox(height: 4),
        // Avatar
        Stack(
          children: [
            CircleAvatar(
              radius: pos == 1 ? 30 : 24,
              backgroundColor: cor.withOpacity(0.25),
              child: Text(
                firstLetter,
                style: TextStyle(
                  color: eu ? kPrimary : cor,
                  fontSize: pos == 1 ? 22 : 18,
                  fontWeight: FontWeight.w900,
                ),
              ),
            ),
            if (eu)
              Positioned(
                right: 0,
                bottom: 0,
                child: Container(
                  width: 14,
                  height: 14,
                  decoration: BoxDecoration(color: kPrimary, shape: BoxShape.circle, border: Border.all(color: kBg, width: 2)),
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
            fontWeight: FontWeight.w700,
          ),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          textAlign: TextAlign.center,
        ),
        Text(
          '${_xp(r)} XP',
          style: TextStyle(color: kText2, fontSize: 11),
        ),
        const SizedBox(height: 4),
        // Podium block
        Container(
          height: height,
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
            child: Text(
              '$pos',
              style: TextStyle(color: medalColor, fontSize: 28, fontWeight: FontWeight.w900),
            ),
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
