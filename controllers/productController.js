import { Product } from "../models/productModel.js";

// INSERT
export const insertProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product inserted successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert product",
      error: error.message
    });
  }
};

// SELECT ALL
export const selectAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.status(200).json({
      message: "Products retrieved successfully",
      data: products
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
      error: error.message
    });
  }
};

// SELECT BY ID
export const selectProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve product",
      error: error.message
    });
  }
};