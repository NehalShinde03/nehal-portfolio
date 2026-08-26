import 'package:dio/dio.dart';

class ApiService {
  ApiService._internal();
  static final ApiService _instance = ApiService._internal();
  factory ApiService() => _instance;

  late final Dio dio = Dio(
    BaseOptions(
      baseUrl: "https://www.themealdb.com/api/json/v1/1/",
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
    ),
  );
}
