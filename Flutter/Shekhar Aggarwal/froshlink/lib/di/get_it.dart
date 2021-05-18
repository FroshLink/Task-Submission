import 'package:froshlink/data/core/api_client.dart';
import 'package:froshlink/data/data_sources/app_remote_data_source.dart';
import 'package:froshlink/data/repositories/app_repositories_impl.dart';
import 'package:froshlink/domain/repositories/app_repository.dart';
import 'package:froshlink/domain/usecases/get_album.dart';
import 'package:froshlink/presentation/blocs/list_bloc/list_bloc_cubit.dart';
import 'package:get_it/get_it.dart';
import 'package:http/http.dart';

final getItInstance = GetIt.I;

Future init() async {
  getItInstance.registerLazySingleton<Client>(() => Client());

  getItInstance
      .registerLazySingleton<ApiClient>(() => ApiClient(getItInstance()));

  ///data sources
  getItInstance.registerLazySingleton<AppRemoteDataSource>(
      () => AppRemoteDataSourceImpl(getItInstance()));

  getItInstance.registerLazySingleton<AppRepository>(() => AppRepositoriesImpl(
        getItInstance(),
      ));

  ///Use Cases
  getItInstance
      .registerLazySingleton<GetAlbum>(() => GetAlbum(getItInstance()));

  ///Cubits
  getItInstance.registerFactory(
    () => ListBlocCubit(getAlbum: getItInstance()),
  );
}
