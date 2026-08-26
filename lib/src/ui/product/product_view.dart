import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:sample_demo/src/common/components/common_textfield.dart';
import 'package:sample_demo/src/model/product_model.dart';
import 'package:sample_demo/src/ui/product/product_controller.dart';
import 'package:sample_demo/src/utils/spacing.dart';

class ProductView extends StatefulWidget {
  const ProductView({super.key});

  static const String routeName = "/product-view";

  static Widget builder(BuildContext context) => const ProductView();

  @override
  State<ProductView> createState() => _ProductViewState();
}

class _ProductViewState extends State<ProductView> {
  late final ProductController controller;
  late final TextEditingController _searchController;
  final _debouncer = Debouncer(delay: const Duration(milliseconds: 500));
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    controller = Get.put(ProductController());
    _searchController = TextEditingController();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!_isInitialized) {
      final arguments = ModalRoute.of(context)?.settings.arguments as List<ProductModel>?;
      if (arguments != null) {
        controller.setData(arguments);
      }
      _isInitialized = true;
    }
  }

  @override
  void dispose() {
    _debouncer.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Product View"),
      ),
      body: SafeArea(
        child: Column(
          children: [
            CommonTextfield(
              controller: _searchController,
              hintText: "Search...",
              onChanged: (value) {
                _debouncer.run(() => controller.onSearch(value));
              },
            ),
            const Gap(14),
            Expanded(
              child: GetBuilder<ProductController>(
                builder: (controller) {
                  if (controller.isLoading) {
                    return const Center(child: CircularProgressIndicator());
                  }

                  final list = controller.list;
                  if (list == null || list.isEmpty) {
                    return Center(
                      child: Padding(
                        padding: const EdgeInsets.all(Spacing.normal),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              controller.errorMessage != null ? Icons.wifi_off : Icons.search_off,
                              size: 64,
                              color: Colors.grey,
                            ),
                            const Gap(Spacing.medium),
                            Text(
                              controller.errorMessage ?? "No Data Found",
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 16),
                            ),
                            if (controller.errorMessage != null) ...[
                              const Gap(Spacing.medium),
                              ElevatedButton.icon(
                                onPressed: () {
                                  controller.onSearch(_searchController.text.trim());
                                },
                                icon: const Icon(Icons.refresh),
                                label: const Text("Retry"),
                              ),
                            ]
                          ],
                        ),
                      ),
                    );
                  }

                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Material(
                      type: MaterialType.transparency,
                      child: ListView.separated(
                        itemBuilder: (context, index) {
                          final data = list[index];
                          return ListTile(
                            onTap: () {
                              controller.getDetails(data.idMeal, context);
                            },
                            tileColor: Colors.grey.withValues(alpha: 0.5),
                            title: Text(data.strMeal),
                            subtitle: Text(
                              data.strCountry,
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                            ),
                            leading: Image.network(
                              data.strMealThumb,
                              errorBuilder: (_, _, _) => const Icon(Icons.broken_image),
                            ),
                          );
                        },
                        separatorBuilder: (context, index) => const Gap(Spacing.small),
                        itemCount: list.length,
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
