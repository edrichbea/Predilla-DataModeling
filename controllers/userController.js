import { User } from "../models/userModel.js";

// INSERT
export const insertUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User inserted successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert user",
      error: error.message
    });
  }
};

// SELECT ALL
export const selectAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      message: "Users retrieved successfully",
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message
    });
  }
};

// SELECT BY ID
export const selectUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User retrieved successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve user",
      error: error.message
    });
  }
};