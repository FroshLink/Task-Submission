import 'dart:convert';
import 'package:flutter/foundation.dart';
import '../model/items.dart';
import 'dart:async';
import 'package:http/http.dart' as http;

Future<List<Item>> fetchItems(http.Client client) async {
  final response = await client
      .get(Uri.parse('https://jsonplaceholder.typicode.com/photos'));
  return compute(parseItems, response.body);
}

List<Item> parseItems(String responseBody) {
  final parsed = jsonDecode(responseBody).cast<Map<String, dynamic>>();

  return parsed.map<Item>((json) => Item.fromJson(json)).toList();
}
