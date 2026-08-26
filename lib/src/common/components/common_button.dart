import 'package:flutter/material.dart';

class CommonButton extends StatelessWidget {
  const CommonButton({super.key, required this.onTap, required this.child, this.width, this.height});

  final VoidCallback onTap;
  final Widget child;
  final double? width;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      width: width,
      child: ElevatedButton(onPressed: onTap, child: child),
    );
  }
}
