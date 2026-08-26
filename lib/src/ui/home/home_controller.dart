import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/model/category_model.dart';
import 'package:sample_demo/src/model/product_model.dart';
import 'package:sample_demo/src/services/api_service.dart';
import 'package:sample_demo/src/ui/login/login_view.dart';
import 'package:sample_demo/src/ui/product/product_view.dart';
import 'package:sample_demo/src/utils/error_handler.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

class HomeController extends GetxController {
  final dio = ApiService().dio;
  List<CategoryModel> list = [];
  bool isLoading = true;
  String? errorMessage;

  void init() async {
    isLoading = true;
    errorMessage = null;
    update();
    try {
      final response = await dio.get("categories.php");
      if (response.statusCode == 200 && response.data['categories'] != null) {
        final data = (response.data['categories'] as List).map((e) => CategoryModel.fromJson(e));
        list = List.from(data);
      }
    } catch (e) {
      errorMessage = ErrorHandler.getErrorMessage(e);
      debugPrint("exception >> $e");
    } finally {
      isLoading = false;
    }

    update();
  }

  Future<void> getProduct(String category, BuildContext context) async {
    try {
      final response = await dio.get("filter.php?c=$category");
      if (response.statusCode == 200 && response.data['meals'] != null) {
        final data = (response.data['meals'] as List).map((e) => ProductModel.fromJson(e));
        if (!context.mounted) return;
        Navigator.pushNamed(context, ProductView.routeName, arguments: List<ProductModel>.from(data));
      }
    } catch (e) {
      final msg = ErrorHandler.getErrorMessage(e);
      if (!context.mounted) return;
      ErrorHandler.showErrorSnackBar(context, msg);
    }
  }

  Future<void> openCurrentLocationMap(BuildContext context) async {
    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      if (!context.mounted) return;
      ErrorHandler.showErrorSnackBar(context, "Location services are disabled. Please enable GPS.");
      return;
    }

    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        if (!context.mounted) return;
        ErrorHandler.showErrorSnackBar(context, "Location permission denied.");
        return;
      }
    }

    if (permission == LocationPermission.deniedForever) {
      if (!context.mounted) return;
      ErrorHandler.showErrorSnackBar(
        context,
        "Location permissions are permanently denied. Please enable them in app settings.",
      );
      return;
    }

    try {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).hideCurrentSnackBar();
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Row(
            children: [
              SizedBox(
                width: 18,
                height: 18,
                child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
              ),
              SizedBox(width: 12),
              Text("Fetching your current location..."),
            ],
          ),
          duration: Duration(seconds: 3),
        ),
      );

      final position = await Geolocator.getCurrentPosition(
        locationSettings: const LocationSettings(
          accuracy: LocationAccuracy.high,
          timeLimit: Duration(seconds: 10),
        ),
      );

      final googleMapsUrl = Uri.parse(
        "https://www.google.com/maps/search/?api=1&query=${position.latitude},${position.longitude}",
      );

      if (await canLaunchUrl(googleMapsUrl)) {
        await launchUrl(googleMapsUrl, mode: LaunchMode.externalApplication);
      } else {
        if (!context.mounted) return;
        ErrorHandler.showErrorSnackBar(context, "Could not launch Google Maps.");
      }
    } catch (e) {
      debugPrint("Location error: $e");
      if (!context.mounted) return;
      ErrorHandler.showErrorSnackBar(context, "Could not get current location.");
    }
  }

  Future<void> logout(BuildContext context) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.clear();
    if (!context.mounted) return;
    Navigator.pushNamedAndRemoveUntil(context, LoginView.routeName, (route) => false);
  }
}
