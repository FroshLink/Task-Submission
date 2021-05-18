import 'package:flutter/material.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/presentation/journeys/album_detail/album_detail_arguments.dart';
import 'package:froshlink/presentation/journeys/album_detail/album_detail_screen.dart';
import 'package:froshlink/presentation/widgets/load_image.dart';

class AlbumCard extends StatelessWidget {
  const AlbumCard({Key key, this.albumEntity}) : super(key: key);
  final AlbumEntity albumEntity;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (_) => AlbumDetailScreen(
                      albumDetailArguments: AlbumDetailArguments(
                          title: albumEntity.title, imageUrl: albumEntity.url),
                    )));
      },
      child: Card(
        child: Stack(
          children: [
            LoadImage(url: albumEntity.thumbnailUrl),
            Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  gradient:
                      LinearGradient(colors: [Colors.black26, Colors.black38]),
                ),
                child: Text(
                  albumEntity.title,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
