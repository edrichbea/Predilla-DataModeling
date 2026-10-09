import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Review = sequelize.define("Review", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export { sequelize };