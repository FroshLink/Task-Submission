import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:froshlink/data/data_sources/app_remote_data_source.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/domain/entities/app_error.dart';
import 'package:froshlink/domain/repositories/app_repository.dart';

class AppRepositoriesImpl extends AppRepository {
  final AppRemoteDataSource remoteDataSource;

  AppRepositoriesImpl(this.remoteDataSource);

  @override
  Future<Either<AppError, List<AlbumEntity>>> getAlbum(int albumId) async {
    try {
      final albums = await remoteDataSource.getAlbum(albumId);
      return Right(albums);
    } on SocketException {
      return Left(AppError(AppErrorType.network));
    } on Exception {
      return Left(AppError(AppErrorType.api));
    }
  }
}
