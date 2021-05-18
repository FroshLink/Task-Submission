// import 'package:contest_watcher/models/Contests.dart';
// import 'package:contest_watcher/models/Upcoming.dart';
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  // Declare a field that holds the Todo.
  final String imageurl;
  final String title;

  // In the constructor, require a Todo.
  DetailScreen({
    Key? key,
    required this.imageurl,
    required this.title,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(
        title: Text("Image and title "),
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Image.network(imageurl),
          ),
          Text(title)
        ],
      ),
    );
  }
}
