import 'package:equatable/equatable.dart';

class AlbumEntity extends Equatable {
  final int albumId;
  final int id;
  final String title;
  final String url;
  final String thumbnailUrl;

  AlbumEntity({this.albumId, this.id, this.title, this.url, this.thumbnailUrl});

  @override
  List<Object> get props => [albumId, id];
}
