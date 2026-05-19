import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:intl/intl.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class AdminRelatorioAnualScreen extends StatefulWidget {
  const AdminRelatorioAnualScreen({super.key});

  @override
  State<AdminRelatorioAnualScreen> createState() => _AdminRelatorioAnualScreenState();
}

class _AdminRelatorioAnualScreenState extends State<AdminRelatorioAnualScreen> {
  Map<String, dynamic>? _relatorio;
  bool _loading = true;
  bool _erro = false;
  late int _ano;

  static const _meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  final _brl = NumberFormat.currency(locale: 'pt_BR', symbol: 'R\$');

  @override
  void initState() {
    super.initState();
    _ano = DateTime.now().year;
    _load();
  }

  Future<void> _load() async {
    if (!mounted) return;
    setState(() { _loading = true; _erro = false; });
    try {
      final res = await dio.get('/api/financeiro/relatorio-anual', queryParameters: {'ano': _ano});
      final dados = res.data['dados'] as Map<String, dynamic>?;
      if (mounted) setState(() { _relatorio = dados; _loading = false; });
    } catch (_) {
      if (mounted) setState(() { _erro = true; _loading = false; });
    }
  }

  void _navAno(int delta) {
    setState(() { _ano += delta; });
    _load();
  }

  double get _maxReceita {
    final lista = _receitaMensal;
    if (lista.isEmpty) return 1;
    return lista.map((m) => (m['recebido'] as num? ?? 0).toDouble() + (m['pendente'] as num? ?? 0).toDouble()).reduce((a, b) => a > b ? a : b);
  }

  List<Map<String, dynamic>> get _receitaMensal {
    final raw = _relatorio?['receitaMensal'];
    if (raw == null) return [];
    return (raw as List).cast<Map<String, dynamic>>();
  }

  List<Map<String, dynamic>> get _inadimplentes {
    final raw = _relatorio?['inadimplentes'];
    if (raw == null) return [];
    return (raw as List).cast<Map<String, dynamic>>();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      appBar: AppBar(
        backgroundColor: kSurface,
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: kText1, size: 20),
          onPressed: () => context.pop(),
        ),
        title: Text('Relatório Anual', style: TextStyle(color: kText1, fontSize: 17, fontWeight: FontWeight.w800)),
      ),
      body: RefreshIndicator(
        onRefresh: _load,
        color: kPrimary,
        child: _loading
            ? const Center(child: CircularProgressIndicator())
            : _erro
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.error_outline_rounded, color: kDanger, size: 52),
                        const SizedBox(height: 14),
                        Text('Não foi possível carregar', style: TextStyle(color: kText2)),
                        const SizedBox(height: 18),
                        OutlinedButton.icon(
                          onPressed: _load,
                          icon: const Icon(Icons.refresh_rounded),
                          label: const Text('Tentar novamente'),
                          style: OutlinedButton.styleFrom(foregroundColor: kPrimary),
                        ),
                      ],
                    ),
                  )
                : SingleChildScrollView(
                    physics: const AlwaysScrollableScrollPhysics(),
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        _AnoSelector(ano: _ano, onNav: _navAno),
                        const SizedBox(height: 16),
                        _SummaryCards(relatorio: _relatorio ?? {}, brl: _brl),
                        const SizedBox(height: 24),
                        _SectionTitle('Receita Mensal'),
                        const SizedBox(height: 12),
                        _BarChart(meses: _receitaMensal, maxVal: _maxReceita, brl: _brl),
                        const SizedBox(height: 24),
                        _SectionTitle('Inadimplentes (${_inadimplentes.length})'),
                        const SizedBox(height: 12),
                        if (_inadimplentes.isEmpty)
                          Container(
                            padding: const EdgeInsets.all(20),
                            decoration: BoxDecoration(
                              color: kSurface,
                              borderRadius: BorderRadius.circular(14),
                              border: Border.all(color: kBorder),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(Icons.check_circle_rounded, color: kSuccess, size: 20),
                                const SizedBox(width: 8),
                                Text('Nenhum inadimplente!', style: TextStyle(color: kSuccess, fontWeight: FontWeight.w700)),
                              ],
                            ),
                          )
                        else
                          ...(_inadimplentes.map((a) => _InadimplenteCard(aluno: a, brl: _brl))),
                        const SizedBox(height: 20),
                      ],
                    ),
                  ),
      ),
    );
  }
}

class _AnoSelector extends StatelessWidget {
  const _AnoSelector({required this.ano, required this.onNav});
  final int ano;
  final void Function(int) onNav;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: kBorder),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          IconButton(
            onPressed: () => onNav(-1),
            icon: Icon(Icons.chevron_left_rounded, color: kText2),
          ),
          Text('$ano', style: TextStyle(color: kText1, fontSize: 20, fontWeight: FontWeight.w800)),
          IconButton(
            onPressed: ano < DateTime.now().year ? () => onNav(1) : null,
            icon: Icon(Icons.chevron_right_rounded, color: ano < DateTime.now().year ? kText2 : kBorder),
          ),
        ],
      ),
    );
  }
}

class _SummaryCards extends StatelessWidget {
  const _SummaryCards({required this.relatorio, required this.brl});
  final Map<String, dynamic> relatorio;
  final NumberFormat brl;

  @override
  Widget build(BuildContext context) {
    final total = (relatorio['totalRecebidoAno'] as num? ?? 0).toDouble();
    final ativos = relatorio['totalAlunosAtivos'] as int? ?? 0;
    final inadimplentes = relatorio['totalInadimplentes'] as int? ?? 0;

    return Row(
      children: [
        Expanded(child: _Card(
          label: 'Recebido no Ano',
          value: brl.format(total),
          icon: Icons.attach_money_rounded,
          color: kSuccess,
        )),
        const SizedBox(width: 10),
        Expanded(child: _Card(
          label: 'Alunos Ativos',
          value: '$ativos',
          icon: Icons.sports_martial_arts_rounded,
          color: kPrimary,
        )),
        const SizedBox(width: 10),
        Expanded(child: _Card(
          label: 'Inadimplentes',
          value: '$inadimplentes',
          icon: Icons.warning_amber_rounded,
          color: kDanger,
        )),
      ],
    );
  }
}

class _Card extends StatelessWidget {
  const _Card({required this.label, required this.value, required this.icon, required this.color});
  final String label, value;
  final IconData icon;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: kBorder),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 22),
          const SizedBox(height: 8),
          Text(value, style: TextStyle(color: kText1, fontWeight: FontWeight.w900, fontSize: 16)),
          const SizedBox(height: 2),
          Text(label, style: TextStyle(color: kText2, fontSize: 10), maxLines: 2),
        ],
      ),
    );
  }
}

class _BarChart extends StatelessWidget {
  const _BarChart({required this.meses, required this.maxVal, required this.brl});
  final List<Map<String, dynamic>> meses;
  final double maxVal;
  final NumberFormat brl;

  static const _labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  @override
  Widget build(BuildContext context) {
    if (meses.isEmpty) {
      return Container(
        height: 100,
        alignment: Alignment.center,
        child: Text('Sem dados para exibir', style: TextStyle(color: kText2)),
      );
    }

    final byMonth = {for (var m in meses) (m['mes'] as int? ?? 0): m};
    const barH = 120.0;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: kBorder),
      ),
      child: Column(
        children: [
          SizedBox(
            height: barH + 32,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: List.generate(12, (i) {
                final m = i + 1;
                final data = byMonth[m];
                final recebido = (data?['recebido'] as num? ?? 0).toDouble();
                final pendente = (data?['pendente'] as num? ?? 0).toDouble();
                final total = recebido + pendente;
                final recH = maxVal > 0 ? (recebido / maxVal) * barH : 0.0;
                final penH = maxVal > 0 ? (pendente / maxVal) * barH : 0.0;

                return Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 2),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        if (total > 0)
                          Tooltip(
                            message: brl.format(total),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                if (penH > 0)
                                  Container(
                                    height: penH,
                                    decoration: BoxDecoration(
                                      color: kWarning.withOpacity(0.7),
                                      borderRadius: recH > 0
                                          ? const BorderRadius.vertical(top: Radius.circular(4))
                                          : BorderRadius.circular(4),
                                    ),
                                  ),
                                if (recH > 0)
                                  Container(
                                    height: recH,
                                    decoration: BoxDecoration(
                                      color: kSuccess,
                                      borderRadius: penH > 0
                                          ? const BorderRadius.vertical(bottom: Radius.circular(4))
                                          : BorderRadius.circular(4),
                                    ),
                                  ),
                              ],
                            ),
                          )
                        else
                          Container(height: 4, decoration: BoxDecoration(color: kBorder, borderRadius: BorderRadius.circular(2))),
                        const SizedBox(height: 4),
                        Text(_labels[i], style: TextStyle(color: kText2, fontSize: 10)),
                      ],
                    ),
                  ),
                );
              }),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _Legend(color: kSuccess, label: 'Recebido'),
              const SizedBox(width: 16),
              _Legend(color: kWarning, label: 'Pendente'),
            ],
          ),
        ],
      ),
    );
  }
}

class _Legend extends StatelessWidget {
  const _Legend({required this.color, required this.label});
  final Color color;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(width: 10, height: 10, decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(3))),
        const SizedBox(width: 4),
        Text(label, style: TextStyle(color: kText2, fontSize: 11)),
      ],
    );
  }
}

class _InadimplenteCard extends StatelessWidget {
  const _InadimplenteCard({required this.aluno, required this.brl});
  final Map<String, dynamic> aluno;
  final NumberFormat brl;

  @override
  Widget build(BuildContext context) {
    final total = (aluno['totalDevido'] as num? ?? 0).toDouble();
    final dias = aluno['diasAtraso'] as int? ?? 0;

    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: kBorder),
      ),
      child: Row(
        children: [
          Container(
            width: 40, height: 40,
            decoration: BoxDecoration(
              color: kDanger.withOpacity(0.12),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Icon(Icons.person_rounded, color: kDanger, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(aluno['nomeAluno']?.toString() ?? '', style: TextStyle(color: kText1, fontWeight: FontWeight.w700)),
              Text('$dias dias de atraso', style: TextStyle(color: kText2, fontSize: 12)),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text(brl.format(total), style: TextStyle(color: kDanger, fontWeight: FontWeight.w800, fontSize: 14)),
            Text('em aberto', style: TextStyle(color: kText2, fontSize: 11)),
          ]),
        ],
      ),
    );
  }
}

class _SectionTitle extends StatelessWidget {
  const _SectionTitle(this.text);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text, style: TextStyle(color: kText1, fontSize: 15, fontWeight: FontWeight.w800));
  }
}
