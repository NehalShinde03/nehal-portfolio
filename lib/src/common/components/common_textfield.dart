import 'package:flutter/material.dart';

class CommonTextfield extends StatelessWidget {
  const CommonTextfield({
    super.key,
    required this.controller,
    required this.hintText,
    this.onChanged,
    this.validator,
    this.obscureText = false,
    this.keyboardType,
    this.autovalidateMode,
    this.suffixIcon,
  });

  final TextEditingController controller;
  final String hintText;
  final ValueChanged<String>? onChanged;
  final FormFieldValidator<String>? validator;
  final bool obscureText;
  final TextInputType? keyboardType;
  final AutovalidateMode? autovalidateMode;
  final Widget? suffixIcon;

  @override
  Widget build(BuildContext context) {
    final border = OutlineInputBorder(borderRadius: BorderRadius.circular(20));
    final errorBorder = OutlineInputBorder(
      borderRadius: BorderRadius.circular(20),
      borderSide: const BorderSide(color: Colors.red),
    );

    return TextFormField(
      controller: controller,
      onChanged: onChanged,
      validator: validator,
      obscureText: obscureText,
      keyboardType: keyboardType,
      autovalidateMode: autovalidateMode ?? AutovalidateMode.onUserInteraction,
      decoration: InputDecoration(
        hintText: hintText,
        suffixIcon: suffixIcon,
        border: border,
        disabledBorder: border,
        enabledBorder: border,
        focusedBorder: border,
        errorBorder: errorBorder,
        focusedErrorBorder: errorBorder,
      ),
    );
  }
}
