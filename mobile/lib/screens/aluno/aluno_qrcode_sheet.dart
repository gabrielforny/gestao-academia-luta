import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';
import '../../core/api_client.dart';
import '../../core/auth_storage.dart';
import '../../core/constants.dart';

class AlunoQrCodeSheet extends StatefulWidget {
  const AlunoQrCodeSheet({super.key});

  @override
  State<AlunoQrCodeSheet> createState() => _AlunoQrCodeSheetState();
}

class _AlunoQrCodeSheetState extends State<AlunoQrCodeSheet> {
  String? _token;
  bool _loading = true;
  bool _erro = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    if (!mounted) return;
    setState(() { _loading = true; _erro = false; });
    try {
      final user = await AuthStorage.getUser();
      if (user == null) throw Exception('sem usuario');
      final res = await dio.get('/api/presencas/qr/${user.id}');
      final dados = res.data['dados'];
      final token = dados is String ? dados : dados?['token']?.toString();
      if (token == null || token.isEmpty) throw Exception('token vazio');
      if (mounted) setState(() { _token = token; _loading = false; });
    } catch (_) {
      if (mounted) setState(() { _erro = true; _loading = false; });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: kSurface,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
      ),
      padding: EdgeInsets.only(
        left: 24,
        right: 24,
        top: 16,
        bottom: MediaQuery.of(context).padding.bottom + 28,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 36,
            height: 4,
            margin: const EdgeInsets.only(bottom: 24),
            decoration: BoxDecoration(color: kBorder, borderRadius: BorderRadius.circular(2)),
          ),
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  color: kPrimary.withOpacity(0.12),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(Icons.qr_code_2_rounded, color: kPrimary, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Meu QR de Presença',
                        style: TextStyle(color: kText1, fontSize: 17, fontWeight: FontWeight.w800)),
                    Text('Apresente ao professor na entrada',
                        style: TextStyle(color: kText2, fontSize: 12)),
                  ],
                ),
              ),
              IconButton(
                onPressed: _loading ? null : _load,
                icon: Icon(Icons.refresh_rounded, color: kText2),
                tooltip: 'Gerar novo código',
              ),
            ],
          ),
          const SizedBox(height: 28),
          if (_loading)
            const SizedBox(
              height: 240,
              child: Center(child: CircularProgressIndicator()),
            )
          else if (_erro)
            SizedBox(
              height: 240,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.error_outline_rounded, color: kDanger, size: 52),
                  const SizedBox(height: 14),
                  Text('Não foi possível gerar o QR Code',
                      style: TextStyle(color: kText2, fontSize: 13), textAlign: TextAlign.center),
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
          else
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: kPrimary.withOpacity(0.20),
                    blurRadius: 32,
                    spreadRadius: 2,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: QrImageView(
                data: _token!,
                version: QrVersions.auto,
                size: 220.0,
                backgroundColor: Colors.white,
                eyeStyle: const QrEyeStyle(
                  eyeShape: QrEyeShape.square,
                  color: Colors.black,
                ),
                dataModuleStyle: const QrDataModuleStyle(
                  dataModuleShape: QrDataModuleShape.square,
                  color: Colors.black,
                ),
              ),
            ),
          const SizedBox(height: 18),
          Text(
            'O código expira automaticamente. Toque em ↺ para renovar.',
            style: TextStyle(color: kText2.withOpacity(0.6), fontSize: 11),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
