import 'package:flutter/material.dart';
import 'package:sample_demo/src/ui/detail/detail_view.dart';
import 'package:sample_demo/src/ui/home/home_view.dart';
import 'package:sample_demo/src/ui/login/login_view.dart';
import 'package:sample_demo/src/ui/product/product_view.dart';

final class AppRoutes {
  static Map<String, WidgetBuilder> get routes => {
        LoginView.routeName: (context) => LoginView.builder(context),
        HomeView.routeName: (context) => HomeView.builder(context),
        ProductView.routeName: (context) => ProductView.builder(context),
        DetailView.routeName: (context) => DetailView.builder(context),
      };
}
