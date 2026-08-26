import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/model/product_model.dart';
import 'package:sample_demo/src/services/api_service.dart';
import 'package:sample_demo/src/ui/detail/detail_view.dart';
import 'package:sample_demo/src/utils/error_handler.dart';

class ProductController extends GetxController {
  final dio = ApiService().dio;
  List<ProductModel>? list = [];
  List<ProductModel> seachList = [];
  bool isLoading = false;
  String? errorMessage;

  void setData(List<ProductModel> incomingData) {
    list = List<ProductModel>.from(incomingData);
    seachList = List<ProductModel>.from(incomingData);
    errorMessage = null;
    update();
  }

  Future<void> getDetails(String id, BuildContext context) async {
    Navigator.pushNamed(context, DetailView.routeName, arguments: id);
  }

  Future<void> onSearch(String value) async {
    if (value.isEmpty) {
      list = List<ProductModel>.from(seachList);
      errorMessage = null;
      update();
      return;
    }
    isLoading = true;
    errorMessage = null;
    update();
    try {
      final response = await dio.get("search.php?s=$value");
      if (response.statusCode == 200) {
        if (response.data['meals'] == null) {
          list = [];
        } else {
          final data = (response.data['meals'] as List).map((e) => ProductModel.fromJson(e));
          list = List<ProductModel>.from(data);
        }
      }
    } catch (e) {
      errorMessage = ErrorHandler.getErrorMessage(e);
      debugPrint("exception >>> $e");
    } finally {
      isLoading = false;
    }
    update();
  }
}

class Debouncer {
  final Duration delay;
  Timer? _timer;

  Debouncer({required this.delay});

  void run(VoidCallback action) {
    _timer?.cancel();
    _timer = Timer(delay, action);
  }

  void dispose() {
    _timer?.cancel();
  }
}
