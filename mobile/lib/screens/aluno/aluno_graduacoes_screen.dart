import 'package:flutter/material.dart';
import '../../core/api_client.dart';
import '../../core/auth_storage.dart';
import '../../core/constants.dart';
import '../../core/widgets.dart';

class AlunoGraduacoesScreen extends StatefulWidget {
  const AlunoGraduacoesScreen({super.key});

  @override
  State<AlunoGraduacoesScreen> createState() => _AlunoGraduacoesScreenState();
}

class _AlunoGraduacoesScreenState extends State<AlunoGraduacoesScreen> {
  List<Map<String, dynamic>> _graduacoes = [];
  Map<String, dynamic>? _faixaAtual;
  bool _loading = true;
  bool _erro = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    setState(() { _loading = true; _erro = false; });
    try {
      final user = await AuthStorage.getUser();
      if (user == null) return;
      final res = await dio.get('/api/graduacoes', queryParameters: {'alunoId': user.id});
      final dados = res.data['dados'];
      final list = (dados is List ? dados : []).cast<Map<String, dynamic>>();
      // Sort by date descending
      list.sort((a, b) {
        final da = a['dataExame']?.toString() ?? '';
        final db = b['dataExame']?.toString() ?? '';
        return db.compareTo(da);
      });
      // Find current belt (most recent approved)
      final aprovadas = list.where((g) => g['aprovado'] == true).toList();
      if (mounted) setState(() {
        _graduacoes = list;
        _faixaAtual = aprovadas.isNotEmpty ? aprovadas.first : null;
      });
    } catch (_) {
      if (mounted) setState(() => _erro = true);
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Color _hexCor(String? hex) {
    if (hex == null || hex.isEmpty) return kPrimary;
    try { return Color(int.parse(hex.replaceAll('#', '0xFF'))); } catch (_) { return kPrimary; }
  }

  String _fmtData(String? s) {
    if (s == null) return '';
    try {
      final parts = s.split('-');
      if (parts.length < 3) return s;
      return '${parts[2]}/${parts[1]}/${parts[0]}';
    } catch (_) { return s; }
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return Scaffold(backgroundColor: kBg, body: Center(child: CircularProgressIndicator(color: kPrimary)));
    if (_erro) return Scaffold(backgroundColor: kBg, body: SafeArea(child: ErroConexao(onRetry: _load)));

    final faixaAtual = _faixaAtual;
    final corFaixa = _hexCor(faixaAtual?['corFaixa'] as String?);
    final accentLight = Color.lerp(corFaixa, Colors.white, 0.3)!;
    final aprovadas = _graduacoes.where((g) => g['aprovado'] == true).toList();

    return Scaffold(
      backgroundColor: kBg,
      body: RefreshIndicator(
        onRefresh: _load,
        color: kPrimary,
        child: SafeArea(
          child: CustomScrollView(
            physics: const AlwaysScrollableScrollPhysics(),
            slivers: [
              // ── Header ────────────────────────────────
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 24, 20, 0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Graduações', style: TextStyle(color: kText1, fontSize: 26, fontWeight: FontWeight.w900)),
                      Text('Seu histórico de faixas', style: TextStyle(color: kText2, fontSize: 13)),
                    ],
                  ),
                ),
              ),

              // ── Faixa atual ───────────────────────────
              if (faixaAtual != null)
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 24, 16, 0),
                    child: Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [corFaixa.withOpacity(0.25), corFaixa.withOpacity(0.08)],
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                        ),
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: corFaixa.withOpacity(0.4)),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 56,
                            height: 56,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: corFaixa.withOpacity(0.2),
                              border: Border.all(color: corFaixa.withOpacity(0.5), width: 2),
                            ),
                            child: Icon(Icons.military_tech_rounded, color: accentLight, size: 28),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Faixa atual', style: TextStyle(color: kText2, fontSize: 11, fontWeight: FontWeight.w600)),
                                Text(faixaAtual['nomeFaixa'] ?? '', style: TextStyle(color: accentLight, fontSize: 20, fontWeight: FontWeight.w900)),
                                if (faixaAtual['nomeModalidade'] != null)
                                  Text(faixaAtual['nomeModalidade'], style: TextStyle(color: kText2, fontSize: 12)),
                              ],
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              Text('${aprovadas.length}', style: TextStyle(color: corFaixa, fontSize: 28, fontWeight: FontWeight.w900)),
                              Text('gradua${aprovadas.length == 1 ? 'ação' : 'ções'}', style: TextStyle(color: kText2, fontSize: 11)),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

              // ── Timeline ──────────────────────────────
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 28, 20, 12),
                  child: Text('HISTÓRICO', style: TextStyle(color: kText2, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1.2)),
                ),
              ),

              if (_graduacoes.isEmpty)
                SliverToBoxAdapter(
                  child: ListaVazia(
                    icon: Icons.military_tech_outlined,
                    titulo: 'Nenhuma graduação registrada',
                    subtitulo: 'Seu histórico de faixas aparecerá aqui.',
                  ),
                )
              else
                SliverList(
                  delegate: SliverChildBuilderDelegate(
                    (_, i) {
                      final g = _graduacoes[i];
                      final aprovado = g['aprovado'] == true;
                      final cor = _hexCor(g['corFaixa'] as String?);
                      final isFirst = i == 0;
                      final isLast = i == _graduacoes.length - 1;

                      return Padding(
                        padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
                        child: IntrinsicHeight(
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              // Timeline line
                              SizedBox(
                                width: 40,
                                child: Column(
                                  children: [
                                    if (!isFirst)
                                      Expanded(flex: 1, child: Center(child: Container(width: 2, color: kBorder))),
                                    Container(
                                      width: 14,
                                      height: 14,
                                      margin: const EdgeInsets.symmetric(vertical: 4),
                                      decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        color: aprovado ? cor : kBorder,
                                        border: Border.all(color: aprovado ? cor.withOpacity(0.5) : kBorder, width: 2),
                                      ),
                                    ),
                                    if (!isLast)
                                      Expanded(flex: 3, child: Center(child: Container(width: 2, color: kBorder))),
                                  ],
                                ),
                              ),
                              // Card
                              Expanded(
                                child: Padding(
                                  padding: const EdgeInsets.only(bottom: 10),
                                  child: Container(
                                    padding: const EdgeInsets.all(14),
                                    decoration: BoxDecoration(
                                      color: kSurface,
                                      borderRadius: BorderRadius.circular(12),
                                      border: Border.all(
                                        color: aprovado && isFirst ? cor.withOpacity(0.4) : kBorder,
                                      ),
                                    ),
                                    child: Row(
                                      children: [
                                        Container(
                                          width: 10,
                                          height: 10,
                                          margin: const EdgeInsets.only(right: 12),
                                          decoration: BoxDecoration(
                                            shape: BoxShape.circle,
                                            color: cor,
                                          ),
                                        ),
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              Text(g['nomeFaixa'] ?? '', style: TextStyle(color: kText1, fontSize: 14, fontWeight: FontWeight.w700)),
                                              if (g['nomeModalidade'] != null)
                                                Text(g['nomeModalidade'], style: TextStyle(color: kText2, fontSize: 11)),
                                              if (g['nomeProfessor'] != null)
                                                Text('Prof. ${g['nomeProfessor']}', style: TextStyle(color: kText2, fontSize: 11)),
                                            ],
                                          ),
                                        ),
                                        Column(
                                          crossAxisAlignment: CrossAxisAlignment.end,
                                          children: [
                                            Text(_fmtData(g['dataExame']?.toString()), style: TextStyle(color: kText2, fontSize: 12)),
                                            const SizedBox(height: 4),
                                            Container(
                                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                              decoration: BoxDecoration(
                                                color: (aprovado ? kSuccess : kDanger).withOpacity(0.15),
                                                borderRadius: BorderRadius.circular(8),
                                              ),
                                              child: Text(
                                                aprovado ? 'Aprovado' : 'Reprovado',
                                                style: TextStyle(
                                                  color: aprovado ? kSuccess : kDanger,
                                                  fontSize: 11,
                                                  fontWeight: FontWeight.w700,
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                    childCount: _graduacoes.length,
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
