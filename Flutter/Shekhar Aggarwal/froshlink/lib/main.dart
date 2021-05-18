import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:froshlink/di/get_it.dart' as getIt;
import 'package:froshlink/presentation/froshlink_app.dart';
import 'package:pedantic/pedantic.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  unawaited(
      SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]));
  unawaited(getIt.init());
  runApp(FroshLink());
}
