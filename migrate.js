import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";

import { User } from "./models/userModel.js";
import { Category } from "./models/categoryModel.js";
import { Product } from "./models/productModel.js";
import { Order } from "./models/orderModel.js";
import { Review } from "./models/reviewModel.js";

import inquirer from "inquirer";

const rootSequelize = new Sequelize("mysql://root:@localhost:3306/");

const { createDb } = await inquirer.prompt([
  {
    type: "confirm",
    name: "createDb",
    message: "Database 'Predilla_DataModeling' may not exist. Create it?",
    default: true,
  },
]);

if (createDb) {
  await rootSequelize.query("CREATE DATABASE IF NOT EXISTS Predilla_DataModeling;");
  console.log("✅ Database created (if it did not exist)");
}

try {
  await sequelize.authenticate();
  console.log("✅ Connected to MySQL database!");

  await sequelize.sync({ force: true });

  console.log("✅ Tables created for all models!");
} catch (err) {
  console.error("❌ Migration failed:", err);
} finally {
  process.exit();
}