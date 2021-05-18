import 'package:flutter/foundation.dart';
import 'package:froshlink/data/models/album_model.dart';

class AlbumResultModel {
  final List<Album> albums;

  AlbumResultModel({@required this.albums});

  factory AlbumResultModel.fromJson(List<dynamic> list) {
    var albums = List<Album>.empty(growable: true);
    list.forEach((element) {
      Map<String, dynamic> json = element;
      if (json.isNotEmpty) {
        final albumModel = Album.fromJson(json);
        albums.add(albumModel);
      }
    });

    return AlbumResultModel(albums: albums);
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['results'] = this.albums.map((v) => v.toJson()).toList();
    return data;
  }
}
