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
      switch (error.code) {
        case 'invalid-credential':
        case 'wrong-password':
        case 'user-not-found':
        case 'INVALID_LOGIN_CREDENTIALS':
          return "Invalid email or password. Please check your credentials and try again.";
        case 'invalid-email':
          return "Please enter a valid email address.";
        case 'user-disabled':
          return "This user account has been disabled. Please contact support.";
        case 'too-many-requests':
          return "Too many failed attempts. Please try again later.";
        case 'network-request-failed':
        case 'unavailable':
          return "No internet connection. Please check your network.";
        default:
          final rawMessage = error.message?.toLowerCase() ?? "";
          if (rawMessage.contains("credential") ||
              rawMessage.contains("expired") ||
              rawMessage.contains("malformed") ||
              rawMessage.contains("incorrect") ||
              rawMessage.contains("password")) {
            return "Invalid email or password. Please check your credentials and try again.";
          }
          return error.message ?? "Authentication failed. Please check your credentials.";
      }
    }

    final str = error.toString().toLowerCase();
    if (str.contains("credential") || str.contains("malformed") || str.contains("expired")) {
      return "Invalid email or password. Please check your credentials and try again.";
    }
    return "An error occurred. Please check your internet connection.";
  }

  static void showErrorSnackBar(BuildContext context, String message, {IconData? icon}) {
    if (!context.mounted) return;
    final isWifiError = message.toLowerCase().contains("internet") || message.toLowerCase().contains("network");
    final displayIcon = icon ?? (isWifiError ? Icons.wifi_off : Icons.error_outline);

    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            Icon(displayIcon, color: Colors.white),
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
