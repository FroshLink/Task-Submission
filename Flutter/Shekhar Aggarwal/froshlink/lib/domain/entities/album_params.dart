class AlbumParams {
  final int albumId;

  AlbumParams({this.albumId});

  Map<String, dynamic> toJson() => {
        'albumId': albumId,
      };
}
