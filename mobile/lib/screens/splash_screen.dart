import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../core/auth_storage.dart';
import '../core/constants.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _redirect();
  }

  Future<void> _redirect() async {
    await Future.delayed(const Duration(milliseconds: 300));
    if (!mounted) return;
    final user = await AuthStorage.getUser();
    if (!mounted) return;
    if (user == null) {
      context.go('/login');
      return;
    }
    switch (user.perfil) {
      case 'Admin':
      case 'Secretaria':
        context.go('/admin/dashboard');
      case 'Professor':
        context.go('/professor/turmas');
      case 'Aluno':
        context.go('/aluno/perfil');
      default:
        context.go('/login');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Tatame',
              style: TextStyle(
                color: kPrimary,
                fontSize: 36,
                fontWeight: FontWeight.w900,
                letterSpacing: -1,
              ),
            ),
            const SizedBox(height: 24),
            CircularProgressIndicator(color: kPrimary),
          ],
        ),
      ),
    );
  }
}
