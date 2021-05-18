import 'package:flutter/material.dart';
import 'package:froshlink/presentation/journeys/album_detail/album_detail_arguments.dart';
import 'package:froshlink/presentation/widgets/load_image.dart';
import 'package:froshlink/common/extensions/ext.dart';
class AlbumDetailScreen extends StatefulWidget {
  final AlbumDetailArguments albumDetailArguments;

  const AlbumDetailScreen({Key key, this.albumDetailArguments})
      : super(key: key);

  @override
  _AlbumDetailScreenState createState() => _AlbumDetailScreenState();
}

class _AlbumDetailScreenState extends State<AlbumDetailScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        brightness: Brightness.dark,
        title: Text(widget.albumDetailArguments.title.intelliTrim(size: 30)),
      ),
      body: Center(
        child: LoadImage(url: widget.albumDetailArguments.imageUrl),
      ),
    );
  }
}
