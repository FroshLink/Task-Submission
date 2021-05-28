import 'package:flutter/material.dart';
import '../model/items.dart';

class DetailScreen extends StatelessWidget {
  final Item item;
  DetailScreen({required this.item});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('item Id:${item.id} Album Id :${item.albumId}'),
      ),
      body: SingleChildScrollView(
        child: Column(children: <Widget>[
          Text(
            'Title',
            style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
          ),
          SingleChildScrollView(
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.black54, width: 2),
                  borderRadius: BorderRadius.all(Radius.circular(15))),
              margin: EdgeInsetsDirectional.all(10),
              width: double.infinity,
              height: 100,
              child: ClipRRect(
                  borderRadius: BorderRadius.all(Radius.circular(5)),
                  child: Text(
                    item.title,
                    textAlign: TextAlign.center,
                  )),
            ),
          ),
          Text(
            'Image',
            style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
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
          Text(
            'Thumbnail Image',
            style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
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
    );
  }
}
