import 'package:flutter/material.dart';
import 'package:harshit_singh/screens/detailscreen.dart';
import '../model/items.dart';

class ItemsList extends StatelessWidget {
  final List<Item> items;

  ItemsList({required this.items});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        return InkWell(
          onTap: () => Navigator.of(context).push(
            MaterialPageRoute(
                builder: (BuildContext ctx) =>
                    DetailScreen(item: items[index])),
          ),
          child: Card(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15),
            ),
            elevation: 4,
            margin: EdgeInsets.all(15),
            child: Column(children: <Widget>[
              Stack(
                children: <Widget>[
                  ClipRRect(
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(15),
                        topRight: Radius.circular(15)),
                    child: Image.network(
                      items[index].url,
                      height: 250,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Positioned(
                    bottom: 20,
                    right: 10,
                    left: 10,
                    child: Container(
                      width: 300,
                      color: Colors.black54,
                      padding: EdgeInsets.symmetric(
                        vertical: 5,
                        horizontal: 20,
                      ),
                      child: Text(
                        items[index].title,
                        style: TextStyle(
                          fontSize: 26,
                          color: Colors.white,
                        ),
                        softWrap: true,
                        overflow: TextOverflow.fade,
                      ),
                    ),
                  )
                ],
              ),
              Container(
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(0, 0, 255, 0.7),
                      borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(15),
                          bottomRight: Radius.circular(15))),
                  height: 40,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: <Widget>[
                      Text(
                        'Id:${items[index].id}',
                        style: TextStyle(
                            color: Colors.white70,
                            fontWeight: FontWeight.bold,
                            fontSize: 25),
                      ),
                      Text(
                        'Album Id:${items[index].albumId}',
                        style: TextStyle(
                            color: Colors.white70,
                            fontWeight: FontWeight.bold,
                            fontSize: 25),
                      ),
                    ],
                  ))
            ]),
          ),
        );
      },
    );
  }
}
