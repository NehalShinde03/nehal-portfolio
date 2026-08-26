import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:sample_demo/firebase_options.dart';
import 'package:sample_demo/src/common/routes.dart';
import 'package:sample_demo/src/ui/home/home_view.dart';
import 'package:sample_demo/src/ui/login/login_view.dart';
import 'package:shared_preferences/shared_preferences.dart';

String? routeName;

Future<void> main() async {
  await init();
  runApp(const MyApp());
}

Future<void> init() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  routeName = await initRoute();
}

Future<String> initRoute() async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  final isLogin = prefs.getBool("isLogin") ?? false;
  if (isLogin) {
    return HomeView.routeName;
  } else {
    return LoginView.routeName;
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      initialRoute: routeName,
      routes: AppRoutes.routes,
    );
  }
}
