import 'package:dartz/dartz.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/domain/entities/album_params.dart';
import 'package:froshlink/domain/entities/app_error.dart';
import 'package:froshlink/domain/repositories/app_repository.dart';
import 'package:froshlink/domain/usecases/usecase.dart';

class GetAlbum extends UseCase<List<AlbumEntity>, AlbumParams> {
  final AppRepository repository;

  GetAlbum(this.repository);

  @override
  Future<Either<AppError, List<AlbumEntity>>> call(AlbumParams params) {
    return repository.getAlbum(params.albumId);
  }
}
