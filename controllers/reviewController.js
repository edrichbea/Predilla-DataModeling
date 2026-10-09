import { Review } from "../models/reviewModel.js";

// INSERT
export const insertReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      message: "Review inserted successfully",
      data: review
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert review",
      error: error.message
    });
  }
};

// SELECT ALL
export const selectAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();

    res.status(200).json({
      message: "Reviews retrieved successfully",
      data: reviews
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve reviews",
      error: error.message
    });
  }
};

// SELECT BY ID
export const selectReviewById = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found"
      });
    }

    res.status(200).json({
      message: "Review retrieved successfully",
      data: review
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve review",
      error: error.message
    });
  }
};
