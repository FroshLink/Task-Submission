import 'package:froshlink/data/core/api_client.dart';
import 'package:froshlink/data/models/album_model.dart';
import 'package:froshlink/data/models/album_result_model.dart';

abstract class AppRemoteDataSource {
  Future<List<Album>> getAlbum(int albumId);
}

class AppRemoteDataSourceImpl extends AppRemoteDataSource {
  final ApiClient _client;

  AppRemoteDataSourceImpl(this._client);

  @override
  Future<List<Album>> getAlbum(int albumId) async {
    final response = await _client.get('photos', params: {'albumId': albumId});
    final albums = AlbumResultModel.fromJson(response).albums;
    print(albums);
    return albums;
  }
}
