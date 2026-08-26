import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/model/details_model.dart';
import 'package:sample_demo/src/services/api_service.dart';
import 'package:sample_demo/src/utils/error_handler.dart';
import 'package:share_plus/share_plus.dart';

class DetailController extends GetxController {
  final dio = ApiService().dio;
  DetailsModel? details;
  bool isLoading = true;
  String? errorMessage;
  String? currentMealId;

  void getDetails(String id) async {
    currentMealId = id;
    isLoading = true;
    errorMessage = null;
    update();
    try {
      final response = await dio.get("lookup.php?i=$id");
      if (response.statusCode == 200 && response.data['meals'] != null) {
        final data = (response.data['meals'] as List).map((e) => DetailsModel.fromJson(e));
        if (data.isNotEmpty) {
          details = data.first;
        }
      }
    } catch (e) {
      errorMessage = ErrorHandler.getErrorMessage(e);
      debugPrint("exception >> $e");
    } finally {
      isLoading = false;
    }

    update();
  }

  void getRandomDetails() async {
    isLoading = true;
    errorMessage = null;
    update();
    try {
      final response = await dio.get("random.php");
      if (response.statusCode == 200 && response.data['meals'] != null) {
        final data = (response.data['meals'] as List).map((e) => DetailsModel.fromJson(e));
        if (data.isNotEmpty) {
          details = data.first;
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

  void share(DetailsModel? data) {
    if (data != null) {
      SharePlus.instance.share(
        ShareParams(text: jsonEncode(data.toJson())),
      );
    }
  }
}
