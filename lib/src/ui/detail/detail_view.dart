import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/common/components/common_button.dart';
import 'package:sample_demo/src/ui/detail/detail_controller.dart';
import 'package:sample_demo/src/utils/spacing.dart';

class DetailView extends StatefulWidget {
  const DetailView({super.key});

  static const String routeName = "/detail-view";

  static Widget builder(BuildContext context) => const DetailView();

  @override
  State<DetailView> createState() => _DetailViewState();
}

class _DetailViewState extends State<DetailView> {
  late final DetailController controller;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    controller = Get.put(DetailController());
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!_isInitialized) {
      final arguments = ModalRoute.of(context)?.settings.arguments as String?;
      if (arguments != null && arguments.isNotEmpty) {
        controller.getDetails(arguments);
      }
      _isInitialized = true;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("DetailView"),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: Spacing.small),
            child: GestureDetector(
              onTap: () {
                controller.getRandomDetails();
              },
              child: const Icon(Icons.refresh),
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: GetBuilder<DetailController>(
          builder: (controller) {
            if (controller.isLoading) {
              return const Center(child: CircularProgressIndicator());
            }

            if (controller.details == null) {
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(Spacing.normal),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.wifi_off, size: 64, color: Colors.grey),
                      const Gap(Spacing.medium),
                      Text(
                        controller.errorMessage ?? "No Data Found",
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 16),
                      ),
                      const Gap(Spacing.medium),
                      ElevatedButton.icon(
                        onPressed: () {
                          if (controller.currentMealId != null) {
                            controller.getDetails(controller.currentMealId!);
                          } else {
                            controller.getRandomDetails();
                          }
                        },
                        icon: const Icon(Icons.refresh),
                        label: const Text("Retry"),
                      ),
                    ],
                  ),
                ),
              );
            }

            final data = controller.details!;
            return ListView(
              shrinkWrap: true,
              padding: const EdgeInsets.all(Spacing.medium),
              children: [
                Align(
                  alignment: Alignment.center,
                  child: Image.network(
                    data.strMealThumb ?? "",
                    width: 170,
                    height: 170,
                    errorBuilder: (_, _, _) => const SizedBox(
                      height: 170,
                      width: 170,
                      child: Icon(Icons.fastfood, size: 80),
                    ),
                  ),
                ),
                const Gap(Spacing.large),
                Text("Meal Name : ${data.strMeal ?? ""}"),
                const Gap(Spacing.xSmall),
                Text("Category Name : ${data.strCategory ?? ""}"),
                const Gap(Spacing.xSmall),
                Text("Details : ${data.strInstructions ?? ""}"),
                const Gap(Spacing.xSmall),
                Text("Location : ${"${data.strArea ?? ""} ${data.strCountry ?? ""}".trim()}"),
                const Gap(Spacing.xLarge),
                CommonButton(
                  onTap: () {
                    controller.share(data);
                  },
                  child: const Text("Share"),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
