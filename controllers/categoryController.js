import { Category } from "../models/categoryModel.js";

// INSERT
export const insertCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      message: "Category inserted successfully",
      data: category
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert category",
      error: error.message
    });
  }
};

// SELECT ALL
export const selectAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      message: "Categories retrieved successfully",
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve categories",
      error: error.message
    });
  }
};

// SELECT BY ID
export const selectCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    res.status(200).json({
      message: "Category retrieved successfully",
      data: category
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve category",
      error: error.message
    });
  }
};