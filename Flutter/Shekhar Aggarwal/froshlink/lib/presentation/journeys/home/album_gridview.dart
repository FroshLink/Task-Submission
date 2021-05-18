import 'dart:async';

import 'package:flutter/material.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/presentation/journeys/home/album_card.dart';

class AlbumGridView extends StatefulWidget {
  const AlbumGridView(
      {Key key, this.albumList, this.isLoading, this.onComplete})
      : super(key: key);
  final List<AlbumEntity> albumList;
  final bool isLoading;
  final VoidCallback onComplete;

  @override
  _AlbumGridViewState createState() => _AlbumGridViewState();
}

class _AlbumGridViewState extends State<AlbumGridView> {
  ScrollController _controllerAlbumList = ScrollController();

  @override
  void initState() {
    _controllerAlbumList.addListener(_scrollListenerEvents);
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
    _controllerAlbumList?.dispose();
  }

  void _scrollListenerEvents() async {
    if (_controllerAlbumList.offset >=
            _controllerAlbumList.position.maxScrollExtent &&
        !_controllerAlbumList.position.outOfRange) {
      widget.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
        controller: _controllerAlbumList,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
        ),
        itemCount: widget.albumList.length + (widget.isLoading ? 1 : 0),
        itemBuilder: (BuildContext context, int index) {
          if (index < widget.albumList.length) {
            final album = widget.albumList[index];
            return AlbumCard(
              albumEntity: album,
            );
          } else {
            Timer(Duration(milliseconds: 30), () {
              _controllerAlbumList
                  .jumpTo(_controllerAlbumList.position.maxScrollExtent);
            });
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: Center(child: CircularProgressIndicator()),
            );
          }
        });
  }
}
