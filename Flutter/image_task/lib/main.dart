import 'package:flutter/material.dart';
import 'package:image_task/album.dart';

import 'Home.dart';

// import 'package:typewriter2/stack.dart';

// import 'details.dart';
// import 'provider.dart';
// import 'auth.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Contest watcher',
      theme: ThemeData.dark(),
      debugShowCheckedModeBanner: false,
      home: Album(),
    );
  }
}
