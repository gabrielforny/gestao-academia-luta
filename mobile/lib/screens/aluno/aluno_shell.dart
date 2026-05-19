import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/constants.dart';
import '../../core/tab_refresh.dart';

class AlunoShell extends StatelessWidget {
  const AlunoShell({super.key, required this.shell});
  final StatefulNavigationShell shell;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: shell,
      bottomNavigationBar: NavigationBar(
        backgroundColor: kSurface,
        indicatorColor: kPrimary.withOpacity(0.2),
        selectedIndex: shell.currentIndex,
        onDestinationSelected: (i) {
          alunoTabNotifier.value = i;
          shell.goBranch(i, initialLocation: i == shell.currentIndex);
        },
        destinations: [
          NavigationDestination(icon: Icon(Icons.person_outline_rounded, color: kText2), selectedIcon: Icon(Icons.person_rounded, color: kPrimary), label: 'Perfil'),
          NavigationDestination(icon: Icon(Icons.schedule_outlined, color: kText2), selectedIcon: Icon(Icons.schedule_rounded, color: kPrimary), label: 'Horários'),
          NavigationDestination(icon: Icon(Icons.check_circle_outline_rounded, color: kText2), selectedIcon: Icon(Icons.check_circle_rounded, color: kPrimary), label: 'Presenças'),
          NavigationDestination(icon: Icon(Icons.credit_card_outlined, color: kText2), selectedIcon: Icon(Icons.credit_card_rounded, color: kPrimary), label: 'Financeiro'),
          NavigationDestination(icon: Icon(Icons.emoji_events_outlined, color: kText2), selectedIcon: Icon(Icons.emoji_events_rounded, color: kPrimary), label: 'Ranking'),
        ],
      ),
    );
  }
}
