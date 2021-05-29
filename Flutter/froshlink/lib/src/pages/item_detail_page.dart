import 'package:flutter/material.dart';
import 'package:froshlink/src/models/view_model.dart';
import 'package:froshlink/src/utils/constants.dart';

class DetailScreen extends StatelessWidget {
  final ViewModel item;

  DetailScreen({required this.item});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: backgroundColor,
        centerTitle: true,
        title: Text('id: ${item.id} | albumId : ${item.albumId}',
            style: TextStyle(fontFamily: 'Montserrat', fontSize: 22.0)),
      ),
      body: Container(
        color: backgroundColor.withOpacity(0.2),
        child: SingleChildScrollView(
          child: Column(children: <Widget>[
            SizedBox(height: 20),
            Text(
              'Title',
              style: TextStyle(fontFamily: 'Montserrat',fontSize: 25, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                '''"'''+ item.title + '''"''',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18,
                  fontFamily: 'Montserrat'
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 8.0, right: 8.0),
              child: Divider(
                color: Colors.black,
                thickness: 1,
              ),
            ),
            Text(
              'Image',
              style: TextStyle(fontFamily: 'Montserrat',fontSize: 25, fontWeight: FontWeight.bold),
            ),
            Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.black54, width: 2),
                  borderRadius: BorderRadius.all(Radius.circular(15))),
              margin: EdgeInsetsDirectional.all(10),
              height: 300,
              width: double.infinity,
              child: ClipRRect(
                borderRadius: BorderRadius.all(Radius.circular(15)),
                child: Image.network(
                  item.url,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 8.0, right: 8.0),
              child: Divider(
                color: Colors.black,
                thickness: 1,
              ),
            ),
            Text(
              'Thumbnail Image',
              style: TextStyle(fontFamily: 'Montserrat',fontSize: 25, fontWeight: FontWeight.bold),
            ),
            Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.black54, width: 2),
                  borderRadius: BorderRadius.all(Radius.circular(15))),
              margin: EdgeInsetsDirectional.all(10),
              height: 300,
              width: double.infinity,
              child: ClipRRect(
                borderRadius: BorderRadius.all(Radius.circular(15)),
                child: Image.network(
                  item.thumbnailUrl,
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
