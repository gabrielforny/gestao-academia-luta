import 'package:flutter/foundation.dart';

// Notifica telas dentro de StatefulShellRoute.indexedStack quando uma aba
// é selecionada, permitindo que recarreguem dados ao ganhar foco.
final alunoTabNotifier = ValueNotifier<int>(0);
final adminTabNotifier = ValueNotifier<int>(0);
