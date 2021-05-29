import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:froshlink/src/models/view_model.dart';
import 'dart:async';
import 'package:http/http.dart' as http;

Future<List<ViewModel>> fetchItems(http.Client client) async {
  final response = await client
      .get(Uri.parse('https://jsonplaceholder.typicode.com/photos'));
  return compute(parseItems, response.body);
}

List<ViewModel> parseItems(String responseBody) {
  final parsed = jsonDecode(responseBody).cast<Map<String, dynamic>>();
  return parsed.map<ViewModel>((json) => ViewModel.fromJSON(json)).toList();
}