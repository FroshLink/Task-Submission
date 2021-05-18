part of 'list_bloc_cubit.dart';

abstract class ListBlocState extends Equatable {
  const ListBlocState();
}

class ListBlocInitial extends ListBlocState {
  @override
  List<Object> get props => [];
}

class LoadingList extends ListBlocState {
  @override
  List<Object> get props => [];
}

class LoadedList extends ListBlocState {
  final List<AlbumEntity> albums;

  const LoadedList(this.albums);

  @override
  List<Object> get props => [albums];
}

class LoadingMoreList extends ListBlocState {
  @override
  List<Object> get props => [];
}
class LoadedMoreList extends ListBlocState {
  final List<AlbumEntity> albums;

  const LoadedMoreList(this.albums);

  @override
  List<Object> get props => [albums];
}

class ErrorList extends ListBlocState {
  final AppErrorType appErrorType;

  const ErrorList(this.appErrorType);

  @override
  List<Object> get props => [appErrorType];
}
