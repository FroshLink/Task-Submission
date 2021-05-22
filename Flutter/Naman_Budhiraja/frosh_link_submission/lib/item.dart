


class Item {
  int albumId;
  int id;
  String title;
  String url;
  String thumbnailUrl;

  Item({this.albumId, this.id, this.title, this.url, this.thumbnailUrl});

  factory Item.fromJson(Map<String, dynamic> json) {
    return Item(
      albumId: json['albumId'] as int,
      id: json['id'] as int,
      title: json['title'] as String,
      url: json['url'] as String,
      thumbnailUrl: json['thumbnailUrl'] as String,
    );
  }
}