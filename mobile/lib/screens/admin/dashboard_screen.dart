import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/auth_storage.dart';
import '../../core/constants.dart';
import '../../core/widgets.dart';

class AdminDashboardScreen extends StatefulWidget {
  const AdminDashboardScreen({super.key});

  @override
  State<AdminDashboardScreen> createState() => _AdminDashboardScreenState();
}

class _AdminDashboardScreenState extends State<AdminDashboardScreen> {
  Map<String, dynamic>? _dash;
  List<Map<String, dynamic>> _frequencia = [];
  StoredUser? _user;
  bool _loading = true;
  bool _erro = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    var user = await AuthStorage.getUser();
    try {
      final futures = await Future.wait([
        dio.get('/api/dashboard/resumo'),
        dio.get('/api/dashboard/frequencia', queryParameters: {'dias': 7}),
        if (user?.nome.isEmpty ?? true) dio.get('/api/usuarios/me') else Future.value(null),
      ]);
      final body = futures[0]!.data as Map<String, dynamic>;
      final freqBody = futures[1]!.data as Map<String, dynamic>;

      if ((user?.nome.isEmpty ?? true) && futures.length > 2 && futures[2] != null) {
        final meData = futures[2]!.data as Map<String, dynamic>;
        final dados = meData['dados'] as Map<String, dynamic>?;
        if (dados != null && user != null) {
          user = StoredUser(
            id: user.id,
            nome: dados['nome'] as String? ?? user.nome,
            email: user.email,
            perfil: user.perfil,
            academiaId: user.academiaId,
          );
          await AuthStorage.save(await AuthStorage.getToken() ?? '', user);
        } else if (dados != null) {
          user = StoredUser(
            id: dados['id']?.toString() ?? '',
            nome: dados['nome'] as String? ?? '',
            email: dados['email'] as String? ?? '',
            perfil: dados['perfil'] as String? ?? '',
          );
        }
      }

      if (mounted) {
        setState(() {
          _user = user;
          _dash = body['dados'] as Map<String, dynamic>?;
          _frequencia = (freqBody['dados'] as List? ?? []).cast<Map<String, dynamic>>();
          _loading = false;
        });
      }
    } catch (_) {
      if (mounted) setState(() { _user = user; _loading = false; _erro = true; });
    }
  }

  Future<void> _sair() async {
    try { await dio.post('/api/auth/logout'); } catch (_) {}
    await AuthStorage.clear();
    if (mounted) context.go('/login');
  }

  @override
  Widget build(BuildContext context) {
    final nome = _user?.nome.split(' ').first ?? 'Admin';
    final d = _dash ?? {};
    final metrics = [
      (label: 'Alunos ativos', value: '${d['totalAlunos'] ?? '—'}', icon: Icons.sports_martial_arts, color: kPrimary),
      (label: 'Turmas ativas', value: '${d['turmasAtivas'] ?? '—'}', icon: Icons.groups_rounded, color: kSuccess),
      (label: 'Presenças hoje', value: '${d['presencasHoje'] ?? '—'}', icon: Icons.check_circle_rounded, color: kWarning),
      (label: 'Inadimplentes', value: '${d['alunosInadimplentes'] ?? '—'}', icon: Icons.warning_amber_rounded, color: kDanger),
    ];

    if (_erro && _dash == null) {
      return Scaffold(
        backgroundColor: kBg,
        body: SafeArea(child: ErroConexao(onRetry: () { setState(() { _loading = true; _erro = false; }); _load(); })),
      );
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
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Olá, $nome 👋', style: TextStyle(color: kText1, fontSize: 22, fontWeight: FontWeight.w800)),
                      Text('Visão geral da academia', style: TextStyle(color: kText2, fontSize: 13)),
                    ]),
                    Row(
                      children: [
                        IconButton(
                          onPressed: () => context.push('/admin/dashboard/aniversariantes'),
                          icon: Icon(Icons.cake_rounded, color: kWarning, size: 22),
                          tooltip: 'Aniversariantes',
                        ),
                        IconButton(
                          onPressed: () => context.push('/admin/dashboard/configuracoes'),
                          icon: Icon(Icons.settings_rounded, color: kText2, size: 22),
                          tooltip: 'Configurações',
                        ),
                        const SizedBox(width: 4),
                        TextButton(
                          onPressed: _sair,
                          style: TextButton.styleFrom(
                            backgroundColor: kDanger.withOpacity(0.12),
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                          ),
                          child: Text('Sair', style: TextStyle(color: kDanger, fontWeight: FontWeight.w700)),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            SliverPadding(
              padding: const EdgeInsets.all(16),
              sliver: _loading
                  ? const SliverToBoxAdapter(child: Center(child: Padding(padding: EdgeInsets.only(top: 40), child: CircularProgressIndicator())))
                  : SliverGrid.count(
                      crossAxisCount: 2,
                      mainAxisSpacing: 12,
                      crossAxisSpacing: 12,
                      childAspectRatio: 1.1,
                      children: metrics
                          .map((m) => Container(
                                decoration: BoxDecoration(
                                  color: kSurface,
                                  borderRadius: BorderRadius.circular(16),
                                  border: Border.all(color: kBorder),
                                ),
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Icon(m.icon, color: m.color, size: 32),
                                    const SizedBox(height: 10),
                                    Text(m.value, style: TextStyle(color: kText1, fontSize: 26, fontWeight: FontWeight.w800)),
                                    const SizedBox(height: 4),
                                    Text(m.label, style: TextStyle(color: kText2, fontSize: 12), textAlign: TextAlign.center),
                                  ],
                                ),
                              ))
                          .toList(),
                    ),
            ),
            if (!_loading && _frequencia.isNotEmpty)
              SliverToBoxAdapter(child: _buildFrequenciaChart()),
            const SliverToBoxAdapter(child: SizedBox(height: 16)),
          ],
        ),
      ),
    ),
    );
  }

  Widget _buildFrequenciaChart() {
    final dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    final maxVal = _frequencia.fold<int>(1, (m, e) {
      final v = (e['total'] as num?)?.toInt() ?? 0;
      return v > m ? v : m;
    });

    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 8),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: kBorder),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Frequência — últimos 7 dias', style: TextStyle(color: kText1, fontSize: 14, fontWeight: FontWeight.w700)),
        const SizedBox(height: 16),
        SizedBox(
          height: 80,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: _frequencia.asMap().entries.map((entry) {
              final i = entry.key;
              final item = entry.value;
              final val = (item['total'] as num?)?.toInt() ?? 0;
              final ratio = maxVal > 0 ? val / maxVal : 0.0;
              final data = (item['data'] as String? ?? '').split('-');
              final label = data.length == 3 ? '${data[2]}/${data[1]}' : '?';
              final diaSemana = _frequencia.length == 7 ? dias[i] : '?';

              return Expanded(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 3),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      if (val > 0)
                        Text('$val', style: TextStyle(color: kText2, fontSize: 9)),
                      const SizedBox(height: 2),
                      Flexible(
                        child: FractionallySizedBox(
                          heightFactor: ratio.clamp(0.05, 1.0),
                          child: Container(
                            decoration: BoxDecoration(
                              color: kPrimary.withOpacity(0.75),
                              borderRadius: const BorderRadius.vertical(top: Radius.circular(4)),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(diaSemana, style: TextStyle(color: kText2, fontSize: 9)),
                      Text(label, style: TextStyle(color: kText2, fontSize: 8)),
                    ],
                  ),
                ),
              );
            }).toList(),
          ),
        ),
      ]),
    );
  }
}
