import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import './requests/jsontoitems.dart';
import './model/items.dart';
import 'screens/itemscreen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primaryColor: Colors.amber, primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Item Details'),
      ),
      body: FutureBuilder<List<Item>>(
        future: fetchItems(http.Client()),
        builder: (context, snapshot) {
          if (snapshot.hasError) print(snapshot.error);

          return snapshot.hasData
              ? ItemsList(items: snapshot.data!)
              : Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
