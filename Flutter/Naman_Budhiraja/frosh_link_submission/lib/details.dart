import 'package:flutter/material.dart';
import 'item.dart';

class GridDetails extends StatefulWidget {
  final Item item;
  GridDetails({@required this.item});

  @override
  GridDetailsState createState() => GridDetailsState();
}

class GridDetailsState extends State<GridDetails> {
  //
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text("Details"),
        centerTitle: true,
      ),
      body: Container(
        alignment: Alignment.center,
        margin: EdgeInsets.all(30.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Hero(
              tag: "image${widget.item.id}",
              child: FadeInImage.assetNetwork(
                placeholder: "images/no_image.png",
                image: widget.item.url,
              ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Text(widget.item.title),
          ],
        ),
      ),
    );
  }
}
