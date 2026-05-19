import 'package:flutter/material.dart';
import 'constants.dart';

class ErroConexao extends StatelessWidget {
  final VoidCallback onRetry;
  final String? mensagem;

  const ErroConexao({super.key, required this.onRetry, this.mensagem});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 72,
              height: 72,
              decoration: BoxDecoration(
                color: kDanger.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(Icons.wifi_off_rounded, color: kDanger, size: 36),
            ),
            const SizedBox(height: 20),
            Text(
              mensagem ?? 'Sem conexão',
              style: TextStyle(color: kText1, fontSize: 16, fontWeight: FontWeight.w700),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 6),
            Text(
              'Verifique sua conexão e tente novamente.',
              style: TextStyle(color: kText2, fontSize: 13),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            OutlinedButton.icon(
              onPressed: onRetry,
              icon: const Icon(Icons.refresh_rounded),
              label: const Text('Tentar novamente'),
              style: OutlinedButton.styleFrom(
                foregroundColor: kPrimary,
                side: BorderSide(color: kPrimary.withOpacity(0.5)),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ListaVazia extends StatelessWidget {
  final IconData icon;
  final String titulo;
  final String? subtitulo;

  const ListaVazia({super.key, required this.icon, required this.titulo, this.subtitulo});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(40),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, color: kBorder, size: 64),
            const SizedBox(height: 16),
            Text(titulo, style: TextStyle(color: kText2, fontSize: 14, fontWeight: FontWeight.w600), textAlign: TextAlign.center),
            if (subtitulo != null) ...[
              const SizedBox(height: 6),
              Text(subtitulo!, style: TextStyle(color: kText2.withOpacity(0.6), fontSize: 12), textAlign: TextAlign.center),
            ],
          ],
        ),
      ),
    );
  }
}
