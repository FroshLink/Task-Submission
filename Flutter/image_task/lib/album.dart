// ignore: unused_import
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_task/Home.dart';
import 'dart:convert';
// import 'package:velocity_x/velocity_x.dart';
import 'package:url_launcher/url_launcher.dart';

class Album extends StatefulWidget {
  @override
  _AlbumState createState() => _AlbumState();
}

class _AlbumState extends State<Album> {
  var apiUrl = Uri.parse("https://jsonplaceholder.typicode.com/photos");

  Future<List<dynamic>> fetchcontests() async {
    var result = await http.get(apiUrl);
    List<dynamic> res = [];
    res = json.decode(result.body);
    return res;
  }

  String _aid(dynamic contest) {
    return contest['albumId'].toString();
  }

  String _id(dynamic contest) {
    return contest['id'].toString();
  }

  String _name(dynamic contest) {
    return contest['title'];
  }

  String _thumbnailUrl(dynamic contest) {
    return contest['thumbnailUrl'];
  }

  String _contesturl(dynamic contest) {
    return contest['url'];
  }

  @override
  Widget build(BuildContext context) {
    // return Scaffold();
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text('contest List'),
        ),
        body: Container(
          child: FutureBuilder<List<dynamic>>(
            future: fetchcontests(),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              if (snapshot.hasData) {
                return ListView.builder(
                    padding: EdgeInsets.all(8),
                    itemCount: snapshot.data.length,
                    itemBuilder: (BuildContext context, int index) {
                      // IndexedWidgetBuilder: (BuildContext context, int index) {
                      return Card(
                        child: Column(
                          children: <Widget>[
                            GestureDetector(
                              child: ListTile(
                                leading: CircleAvatar(
                                    radius: 30,
                                    backgroundImage: NetworkImage(
                                        _thumbnailUrl(snapshot.data[index]))),
                                title: Text("album id: " +
                                    _aid(snapshot.data[index]) +
                                    " image id: " +
                                    _aid(snapshot.data[index])),
                                // subtitle: Image.network(
                                //     _thumbnailUrl(snapshot.data[index])),
                              ),
                              onTap: () {
                                // launch(_contesturl(snapshot.data[index]));
                                {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) => DetailScreen(
                                        imageurl:
                                            _contesturl(snapshot.data[index]),
                                        title: _name(snapshot.data[index]),
                                      ),
                                    ),
                                  );
                                }
                              },
                            )
                          ],
                        ),
                      );
                    });
              } else {
                return Center(child: CircularProgressIndicator());
              }
            },
          ),
        ),
      ),
    );
  }
}
