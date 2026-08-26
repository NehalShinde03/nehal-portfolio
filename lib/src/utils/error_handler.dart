import 'dart:io';
import 'package:dio/dio.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class ErrorHandler {
  static String getErrorMessage(Object error) {
    if (error is DioException) {
      switch (error.type) {
        case DioExceptionType.connectionTimeout:
        case DioExceptionType.sendTimeout:
        case DioExceptionType.receiveTimeout:
        case DioExceptionType.connectionError:
          return "No internet connection. Please check your network.";
        case DioExceptionType.badResponse:
          return "Server error (${error.response?.statusCode}). Please try again.";
        case DioExceptionType.cancel:
          return "Request cancelled.";
        default:
          if (error.error is SocketException) {
            return "No internet connection. Please check your network.";
          }
          return "Network error occurred. Please check your connection.";
      }
    } else if (error is SocketException) {
      return "No internet connection. Please check your network.";
    } else if (error is FirebaseAuthException) {
      if (error.code == 'network-request-failed' || error.code == 'unavailable') {
        return "No internet connection. Please check your network.";
      }
      return error.message ?? "Authentication failed. Please try again.";
    }
    return "An error occurred. Please check your internet connection.";
  }

  static void showErrorSnackBar(BuildContext context, String message) {
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            const Icon(Icons.wifi_off, color: Colors.white),
            const SizedBox(width: 8),
            Expanded(child: Text(message)),
          ],
        ),
        backgroundColor: Colors.red.shade700,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }
}
