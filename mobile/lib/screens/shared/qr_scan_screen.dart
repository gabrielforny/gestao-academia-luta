import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import '../../core/api_client.dart';
import '../../core/constants.dart';

class QrScanScreen extends StatefulWidget {
  const QrScanScreen({super.key});

  @override
  State<QrScanScreen> createState() => _QrScanScreenState();
}

class _QrScanScreenState extends State<QrScanScreen> {
  final MobileScannerController _ctrl = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
  );

  bool _processando = false;
  String? _mensagem;
  bool _sucesso = false;

  Future<void> _processar(String token) async {
    if (_processando) return;
    setState(() { _processando = true; _mensagem = null; });
    await _ctrl.stop();

    try {
      final res = await dio.post('/api/presencas/qrcode', data: {'token': token});
      final body = res.data as Map<String, dynamic>;
      setState(() {
        _sucesso = body['sucesso'] == true;
        _mensagem = body['mensagem'] ?? (_sucesso ? 'Presença registrada!' : 'Erro ao registrar.');
      });
    } on DioException catch (e) {
      setState(() {
        _sucesso = false;
        _mensagem = e.response?.data?['mensagem'] ?? 'Erro de conexão.';
      });
    }
  }

  Future<void> _reiniciar() async {
    setState(() { _processando = false; _mensagem = null; _sucesso = false; });
    await _ctrl.start();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        title: const Text('Registrar presença', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
        actions: [
          IconButton(
            icon: const Icon(Icons.flash_on_rounded),
            onPressed: () => _ctrl.toggleTorch(),
          ),
        ],
      ),
      body: Stack(
        children: [
          if (!_processando)
            MobileScanner(
              controller: _ctrl,
              onDetect: (capture) {
                final code = capture.barcodes.firstOrNull?.rawValue;
                if (code != null && code.isNotEmpty) _processar(code);
              },
            ),

          // Viewfinder overlay
          if (!_processando)
            Center(
              child: Container(
                width: 260,
                height: 260,
                decoration: BoxDecoration(
                  border: Border.all(color: kPrimary, width: 2.5),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      margin: const EdgeInsets.only(bottom: 12),
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.55),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        'Aponte para o QR Code do aluno',
                        style: TextStyle(color: Colors.white.withOpacity(0.85), fontSize: 12),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ],
                ),
              ),
            ),

          // Result overlay
          if (_processando)
            Container(
              color: Colors.black,
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.all(32),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      _mensagem == null
                          ? Column(children: [
                              CircularProgressIndicator(color: kPrimary),
                              const SizedBox(height: 20),
                              Text('Registrando...', style: TextStyle(color: kText2, fontSize: 15)),
                            ])
                          : Column(children: [
                              Container(
                                width: 72,
                                height: 72,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: (_sucesso ? kSuccess : kDanger).withOpacity(0.15),
                                ),
                                child: Icon(
                                  _sucesso ? Icons.check_circle_rounded : Icons.cancel_rounded,
                                  color: _sucesso ? kSuccess : kDanger,
                                  size: 44,
                                ),
                              ),
                              const SizedBox(height: 20),
                              Text(
                                _mensagem!,
                                style: TextStyle(color: kText1, fontSize: 17, fontWeight: FontWeight.w700),
                                textAlign: TextAlign.center,
                              ),
                              const SizedBox(height: 32),
                              SizedBox(
                                width: double.infinity,
                                child: FilledButton(
                                  onPressed: _reiniciar,
                                  style: FilledButton.styleFrom(
                                    backgroundColor: kPrimary,
                                    padding: const EdgeInsets.symmetric(vertical: 14),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                  ),
                                  child: const Text('Escanear outro', style: TextStyle(fontWeight: FontWeight.w700)),
                                ),
                              ),
                            ]),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
