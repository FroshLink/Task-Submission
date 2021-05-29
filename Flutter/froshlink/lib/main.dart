import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:froshlink/src/database/getData.dart';
import 'package:froshlink/src/models/view_model.dart';
import 'package:froshlink/src/pages/item_screen.dart';
import 'package:froshlink/src/utils/constants.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'FroshLink',
      home: SplashScreen(),
    );
  }
}

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {

  var _visible = true;

  late AnimationController animationController;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();
    animationController = new AnimationController(
        vsync: this, duration: new Duration(seconds: 2));
    animation =
    new CurvedAnimation(parent: animationController, curve: Curves.easeOut);

    animation.addListener(() => this.setState(() {}));
    animationController.forward();

    setState(() {
      _visible = !_visible;
    });
    startTime();
  }

  startTime() async {
    var _duration = new Duration(seconds: 3);
    return Timer(_duration, navigationPage);
  }

  void navigationPage() async {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => MyHomePage(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Hero(
          tag: 'hero',
          child: Stack(
            fit: StackFit.expand,
            children: <Widget>[
              new Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  new Image.asset(
                    'assets/logo.png',
                    width: animation.value * 250,
                    height: animation.value * 250,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}


class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: backgroundColor,
        centerTitle: true,
        title: Text('Items', style: TextStyle(fontFamily: 'Montserrat', fontSize: 22.0)),
      ),
      body: Container(
        color: backgroundColor.withOpacity(0.2),
        child: FutureBuilder<List<ViewModel>>(
          future: fetchItems(http.Client()),
          builder: (context, snapshot) {
            return snapshot.hasData
                ? ItemsList(items: snapshot.data!)
                : Center(child: CircularProgressIndicator(valueColor: AlwaysStoppedAnimation(backgroundColor)));
          },
        ),
      ),
    );
  }
}