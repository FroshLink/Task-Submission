import 'package:flutter/material.dart';
import 'package:froshlink/presentation/journeys/home/home_screen.dart';
import 'package:froshlink/presentation/themes/theme_color.dart';
import 'package:froshlink/presentation/themes/theme_text.dart';

class FroshLink extends StatefulWidget {
  const FroshLink({Key key}) : super(key: key);

  @override
  _FroshLinkState createState() => _FroshLinkState();
}

class _FroshLinkState extends State<FroshLink> {
  final _navigatorKey = GlobalKey<NavigatorState>();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      navigatorKey: _navigatorKey,
      debugShowCheckedModeBanner: false,
      title: 'FroshLink App',
      theme: ThemeData(
        unselectedWidgetColor: AppColor.royalBlue,
        primaryColor: AppColor.vulcan,
        accentColor: AppColor.royalBlue,
        scaffoldBackgroundColor: AppColor.vulcan,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        textTheme: ThemeText.getTextTheme(),
        appBarTheme: const AppBarTheme(elevation: 0),
      ),
      home: HomeScreen(),
    );
  }
}
