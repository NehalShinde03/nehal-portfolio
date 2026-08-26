import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/common/components/common_button.dart';
import 'package:sample_demo/src/common/components/common_textfield.dart';
import 'package:sample_demo/src/ui/login/login_controller.dart';
import 'package:sample_demo/src/utils/spacing.dart';

class LoginView extends StatefulWidget {
  const LoginView({super.key});

  static const String routeName = "/login-view";

  static Widget builder(BuildContext context) => const LoginView();

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final _formKey = GlobalKey<FormState>();
  late final TextEditingController _emailController;
  late final TextEditingController _passwordController;
  bool _isPasswordVisible = false;

  @override
  void initState() {
    super.initState();
    _emailController = TextEditingController();
    _passwordController = TextEditingController();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusManager.instance.primaryFocus?.unfocus(),
      behavior: HitTestBehavior.opaque,
      child: Scaffold(
        body: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(Spacing.normal),
            child: GetBuilder<LoginController>(
              init: LoginController(),
              builder: (controller) {
                return Form(
                  key: _formKey,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      CommonTextfield(
                        controller: _emailController,
                        hintText: "Enter Email",
                        keyboardType: TextInputType.emailAddress,
                        validator: (value) {
                          if (value == null || value.trim().isEmpty) {
                            return "Please enter email";
                          }
                          if (!GetUtils.isEmail(value.trim())) {
                            return "Please enter a valid email address";
                          }
                          return null;
                        },
                      ),
                      const Gap(Spacing.medium),
                      CommonTextfield(
                        controller: _passwordController,
                        hintText: "Enter Password",
                        obscureText: !_isPasswordVisible,
                        suffixIcon: IconButton(
                          icon: Icon(
                            _isPasswordVisible
                                ? Icons.visibility
                                : Icons.visibility_off,
                          ),
                          onPressed: () {
                            setState(() {
                              _isPasswordVisible = !_isPasswordVisible;
                            });
                          },
                        ),
                        validator: (value) {
                          if (value == null || value.trim().isEmpty) {
                            return "Please enter password";
                          }
                          if (value.trim().length < 6) {
                            return "Password must be at least 6 characters";
                          }
                          return null;
                        },
                      ),
                      const Gap(Spacing.large),
                      if (!controller.isValid) ...[
                        const Text(
                          "Email or Password are invalid...",
                          style: TextStyle(color: Colors.red),
                        ),
                        const Gap(Spacing.medium),
                      ],
                      CommonButton(
                        onTap: () {
                          if (_formKey.currentState?.validate() ?? false) {
                            FocusManager.instance.primaryFocus?.unfocus();
                            controller.login(
                              _emailController.text.trim(),
                              _passwordController.text.trim(),
                              context,
                            );
                          }
                        },
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          spacing: Spacing.medium,
                          children: [
                            const Text("Login"),
                            if (controller.isLoading) ...[
                              const SizedBox(
                                height: 20,
                                width: 20,
                                child: CircularProgressIndicator(strokeWidth: 2),
                              ),
                            ]
                          ],
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
