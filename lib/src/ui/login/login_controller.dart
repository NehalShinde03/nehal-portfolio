import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:sample_demo/src/ui/home/home_view.dart';
import 'package:sample_demo/src/utils/error_handler.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LoginController extends GetxController {
  bool isLoading = false;
  bool isValid = true;
  String? errorMessage;

  Future<void> login(String email, String password, BuildContext context) async {
    isLoading = true;
    isValid = true;
    errorMessage = null;
    update();

    try {
      final data = await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: email,
        password: password,
      );

      if (data.user != null) {
        final SharedPreferences prefs = await SharedPreferences.getInstance();
        await prefs.setBool("isLogin", true);
        isValid = true;
        if (!context.mounted) return;
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomeView.builder(context)),
        );
      } else {
        isLoading = false;
        isValid = false;
        errorMessage = "EmailId or Password are invalid";
        if (!context.mounted) return;
        ErrorHandler.showErrorSnackBar(context, errorMessage!);
      }
    } catch (e) {
      isValid = false;
      isLoading = false;
      errorMessage = ErrorHandler.getErrorMessage(e);
      debugPrint("exception >> $e");
      if (context.mounted) {
        ErrorHandler.showErrorSnackBar(context, errorMessage!);
      }
    }
    update();
  }
}
