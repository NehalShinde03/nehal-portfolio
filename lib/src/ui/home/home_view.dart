import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/ui/home/home_controller.dart';
import 'package:sample_demo/src/utils/spacing.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  static const String routeName = "/home-view";

  static Widget builder(BuildContext context) => const HomeView();

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  late final HomeController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.put(HomeController());
    controller.init();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("CategoryView"),
        actions: [
          IconButton(
            icon: const Icon(Icons.location_on),
            tooltip: "Current Location",
            onPressed: () {
              controller.openCurrentLocationMap(context);
            },
          ),
          GestureDetector(
            onTap: () {
              controller.logout(context);
            },
            child: const Icon(Icons.logout),
          ),
          const Gap(Spacing.small),
        ],
      ),
      body: SafeArea(
        child: GetBuilder<HomeController>(
          builder: (controller) {
            if (controller.isLoading) {
              return const Center(child: CircularProgressIndicator());
            }

            if (controller.list.isEmpty) {
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
                        onPressed: controller.init,
                        icon: const Icon(Icons.refresh),
                        label: const Text("Retry"),
                      ),
                    ],
                  ),
                ),
              );
            }

            return ListView.separated(
              itemBuilder: (context, index) {
                final data = controller.list[index];
                return ListTile(
                  onTap: () {
                    controller.getProduct(data.strCategory, context);
                  },
                  tileColor: Colors.grey.withValues(alpha: 0.5),
                  title: Text(data.strCategory),
                  subtitle: Text(
                    data.strCategoryDescription,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  leading: Image.network(
                    data.strCategoryThumb,
                    errorBuilder: (_, _, _) => const Icon(Icons.broken_image),
                  ),
                );
              },
              separatorBuilder: (context, index) => const Gap(Spacing.small),
              itemCount: controller.list.length,
            );
          },
        ),
      ),
    );
  }
}
