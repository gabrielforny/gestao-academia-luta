import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class AdminTurmasScreen extends StatefulWidget {
  const AdminTurmasScreen({super.key});

  @override
  State<AdminTurmasScreen> createState() => _AdminTurmasScreenState();
}

class _AdminTurmasScreenState extends State<AdminTurmasScreen> {
  final _ctrl = TextEditingController();
  List<Map<String, dynamic>> _turmas = [];
  List<Map<String, dynamic>> _filtradas = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
    _ctrl.addListener(_filtrar);
  }

  Future<void> _load() async {
    setState(() => _loading = true);
    try {
      final res = await dio.get('/api/turmas');
      final body = res.data as Map<String, dynamic>;
      final dados = body['dados'];
      final list = dados is List ? dados : (dados is Map ? (dados['itens'] as List? ?? []) : []);
      if (mounted) {
        setState(() {
          _turmas = list.cast<Map<String, dynamic>>();
          _filtrar();
        });
      }
    } catch (_) {} finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _filtrar() {
    final q = _ctrl.text.trim().toLowerCase();
    setState(() {
      _filtradas = q.isEmpty
          ? List.from(_turmas)
          : _turmas.where((t) {
              final nome = (t['nome'] as String? ?? '').toLowerCase();
              final mod = (t['modalidadeNome'] as String? ?? '').toLowerCase();
              final prof = (t['professorNome'] as String? ?? '').toLowerCase();
              return nome.contains(q) || mod.contains(q) || prof.contains(q);
            }).toList();
    });
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 20, 16, 12),
              child: Text('Turmas', style: TextStyle(color: kText1, fontSize: 22, fontWeight: FontWeight.w800)),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: TextField(
                controller: _ctrl,
                style: TextStyle(color: kText1),
                decoration: InputDecoration(
                  hintText: 'Buscar turma...',
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
            const SizedBox(height: 12),
            Expanded(
              child: _loading
                  ? Center(child: CircularProgressIndicator(color: kPrimary))
                  : _filtradas.isEmpty
                      ? Center(child: Text('Nenhuma turma encontrada.', style: TextStyle(color: kText2)))
                      : RefreshIndicator(
                          onRefresh: _load,
                          child: ListView.builder(
                            padding: const EdgeInsets.symmetric(horizontal: 16),
                            itemCount: _filtradas.length,
                            itemBuilder: (_, i) {
                              final t = _filtradas[i];
                              final ativa = t['ativo'] == true;
                              final total = t['totalAlunos'] ?? 0;
                              final cap = t['capacidadeMaxima'] ?? 0;
                              return GestureDetector(
                                onTap: () => context.push('/admin/turmas/${t['id']}', extra: t),
                                child: Container(
                                  margin: const EdgeInsets.only(bottom: 10),
                                  padding: const EdgeInsets.all(16),
                                  decoration: BoxDecoration(
                                    color: kSurface,
                                    borderRadius: BorderRadius.circular(14),
                                    border: Border.all(color: kBorder),
                                  ),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Row(
                                        children: [
                                          Expanded(
                                            child: Text(t['nome'] ?? '', style: TextStyle(color: kText1, fontSize: 15, fontWeight: FontWeight.w700)),
                                          ),
                                          Container(
                                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                            decoration: BoxDecoration(
                                              color: ativa ? kSuccess.withOpacity(0.15) : kText2.withOpacity(0.15),
                                              borderRadius: BorderRadius.circular(6),
                                            ),
                                            child: Text(
                                              ativa ? 'Ativa' : 'Inativa',
                                              style: TextStyle(color: ativa ? kSuccess : kText2, fontSize: 11, fontWeight: FontWeight.w700),
                                            ),
                                          ),
                                        ],
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        [t['modalidadeNome'], t['nivel']].where((s) => s != null && s != '').join(' · '),
                                        style: TextStyle(color: kText2, fontSize: 13),
                                      ),
                                      if (t['professorNome'] != null && (t['professorNome'] as String).isNotEmpty) ...[
                                        const SizedBox(height: 2),
                                        Text('Prof. ${t['professorNome']}', style: TextStyle(color: kPrimary, fontSize: 12)),
                                      ],
                                      const SizedBox(height: 8),
                                      Row(
                                        children: [
                                          Text('$total', style: TextStyle(color: kPrimary, fontSize: 22, fontWeight: FontWeight.w800)),
                                          Text(' / $cap alunos', style: TextStyle(color: kText2, fontSize: 13)),
                                          const Spacer(),
                                          Icon(Icons.chevron_right, color: kText2, size: 18),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            },
                          ),
                        ),
            ),
          ],
        ),
      ),
    );
  }
}
