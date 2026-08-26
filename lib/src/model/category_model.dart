import 'dart:convert';

CategoryModel categoryModelFromJson(String str) => CategoryModel.fromJson(json.decode(str));

String categoryModelToJson(CategoryModel data) => json.encode(data.toJson());

class CategoryModel {
  final String idCategory;
  final String strCategory;
  final String strCategoryThumb;
  final String strCategoryDescription;

  CategoryModel({
    required this.idCategory,
    required this.strCategory,
    required this.strCategoryThumb,
    required this.strCategoryDescription,
  });

  CategoryModel copyWith({
    String? idCategory,
    String? strCategory,
    String? strCategoryThumb,
    String? strCategoryDescription,
  }) =>
      CategoryModel(
        idCategory: idCategory ?? this.idCategory,
        strCategory: strCategory ?? this.strCategory,
        strCategoryThumb: strCategoryThumb ?? this.strCategoryThumb,
        strCategoryDescription: strCategoryDescription ?? this.strCategoryDescription,
      );

  factory CategoryModel.fromJson(Map<String, dynamic> json) => CategoryModel(
        idCategory: json["idCategory"] ?? "",
        strCategory: json["strCategory"] ?? "",
        strCategoryThumb: json["strCategoryThumb"] ?? "",
        strCategoryDescription: json["strCategoryDescription"] ?? "",
      );

  Map<String, dynamic> toJson() => {
        "idCategory": idCategory,
        "strCategory": strCategory,
        "strCategoryThumb": strCategoryThumb,
        "strCategoryDescription": strCategoryDescription,
      };
}
