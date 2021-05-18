import 'package:dartz/dartz.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/domain/entities/app_error.dart';

abstract class AppRepository {
  Future<Either<AppError, List<AlbumEntity>>> getAlbum(int albumId);
}
