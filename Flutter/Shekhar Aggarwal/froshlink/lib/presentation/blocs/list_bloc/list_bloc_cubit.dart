import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/foundation.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/domain/entities/album_params.dart';
import 'package:froshlink/domain/entities/app_error.dart';
import 'package:froshlink/domain/usecases/get_album.dart';

part 'list_bloc_state.dart';

class ListBlocCubit extends Cubit<ListBlocState> {
  final GetAlbum getAlbum;

  ListBlocCubit({@required this.getAlbum}) : super(ListBlocInitial());

  void getAlbums(int albumId) async {
    if (albumId == 1)
      emit(LoadingList());
    else
      emit(LoadingMoreList());
    final Either<AppError, List<AlbumEntity>> response =
        await getAlbum(AlbumParams(albumId: albumId));
    if (albumId == 1)
      emit(response.fold(
        (l) => ErrorList(l.appErrorType),
        (r) => LoadedList(r),
      ));
    else
      emit(response.fold(
        (l) => ErrorList(l.appErrorType),
        (r) => LoadedMoreList(r),
      ));
  }
}
