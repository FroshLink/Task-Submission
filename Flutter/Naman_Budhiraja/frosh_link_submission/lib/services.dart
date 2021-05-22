import 'dart:convert';
import 'package:http/http.dart' as http;
import 'item.dart';

class Services {
  static const String url = "https://jsonplaceholder.typicode.com/photos";

  static Future<List<Item>> getPhotos() async {
    try {
      final response = await http.get(Uri.parse(url));
      if (response.statusCode == 200) {
        List<Item> list = parsePhotos(response.body);
        return list;
      } else {
        throw Exception("Error");
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  static List<Item> parsePhotos(String responseBody) {
    final parsed = json.decode(responseBody).cast<Map<String, dynamic>>();
    return parsed.map<Item>((json) => Item.fromJson(json)).toList();
  }
}
