import { Order } from "../models/orderModel.js";

// INSERT
export const insertOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      message: "Order inserted successfully",
      data: order
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert order",
      error: error.message
    });
  }
};

// SELECT ALL
export const selectAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json({
      message: "Orders retrieved successfully",
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve orders",
      error: error.message
    });
  }
};

// SELECT BY ID
export const selectOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json({
      message: "Order retrieved successfully",
      data: order
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve order",
      error: error.message
    });
  }
};