import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:froshlink/di/get_it.dart';
import 'package:froshlink/domain/entities/album_entity.dart';
import 'package:froshlink/presentation/blocs/list_bloc/list_bloc_cubit.dart';
import 'package:froshlink/presentation/journeys/home/album_gridview.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  ListBlocCubit _listBlocCubit;
  List<AlbumEntity> _albumList = List.empty(growable: true);
  int count = 1;
  bool isLoading = false;

  @override
  void initState() {
    _listBlocCubit = getItInstance<ListBlocCubit>();
    _listBlocCubit.getAlbums(count);
    super.initState();
  }

  @override
  void dispose() {
    _listBlocCubit?.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Album"),
        brightness: Brightness.dark,
      ),
      body: BlocBuilder<ListBlocCubit, ListBlocState>(
        cubit: _listBlocCubit,
        builder: (context, state) {
          if (state is ListBlocInitial ||
              state is LoadingList && _albumList.isEmpty) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else if (state is LoadedList) {
            if (_albumList.isEmpty) _albumList.addAll(state.albums);
          } else if (state is LoadingMoreList) {
            isLoading = true;
          } else if (state is LoadedMoreList) {
            isLoading = false;
            if ((count + 1) != state.albums.last.albumId)
              _albumList.addAll(state.albums);
          } else if (state is ErrorList) {
            return Center(
              child: Text("Error ${state.appErrorType}"),
            );
          }
          return AlbumGridView(
            albumList: _albumList,
            onComplete: () {
              if (count < 100) {
                count++;
                _listBlocCubit.getAlbums(count);
              }
            },
            isLoading: isLoading,
          );
        },
      ),
    );
  }
}
