// To parse this JSON data, do
//
//     final productModel = productModelFromJson(jsonString);

import 'dart:convert';

ProductModel productModelFromJson(String str) => ProductModel.fromJson(json.decode(str));

String productModelToJson(ProductModel data) => json.encode(data.toJson());

class ProductModel {
  final String strMeal;
  final String strMealThumb;
  final String idMeal;
  final String? strArea;
  final String strCountry;

  ProductModel({
    required this.strMeal,
    required this.strMealThumb,
    required this.idMeal,
    this.strArea,
    required this.strCountry,
  });

  ProductModel copyWith({
    String? strMeal,
    String? strMealThumb,
    String? idMeal,
    String? strArea,
    String? strCountry,
  }) =>
      ProductModel(
        strMeal: strMeal ?? this.strMeal,
        strMealThumb: strMealThumb ?? this.strMealThumb,
        idMeal: idMeal ?? this.idMeal,
        strArea: strArea ?? this.strArea,
        strCountry: strCountry ?? this.strCountry,
      );

  factory ProductModel.fromJson(Map<String, dynamic> json) => ProductModel(
    strMeal: json["strMeal"] ?? "",
    strMealThumb: json["strMealThumb"] ?? "",
    idMeal: json["idMeal"] ?? "",
    strArea: json["strArea"],
    strCountry: json["strCountry"] ?? "",
  );

  Map<String, dynamic> toJson() => {
    "strMeal": strMeal,
    "strMealThumb": strMealThumb,
    "idMeal": idMeal,
    "strArea": strArea,
    "strCountry": strCountry,
  };
}
