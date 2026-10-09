
  /*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    
   import express from "express";

   import { homePage } from "../controllers/homeController.js";
   
   import {
     loginPage,
     registerPage,
     forgotPasswordPage,
     dashboardPage,
     loginUser,
     registerUser,
     logoutUser
   } from "../controllers/authController.js";
   
   import {
     insertUser,
     selectAllUsers,
     selectUserById
   } from "../controllers/userController.js";
   
   import {
     insertCategory,
     selectAllCategories,
     selectCategoryById
   } from "../controllers/categoryController.js";
   
   import {
     insertProduct,
     selectAllProducts,
     selectProductById
   } from "../controllers/productController.js";
   
   import {
     insertOrder,
     selectAllOrders,
     selectOrderById
   } from "../controllers/orderController.js";
   
   import {
     insertReview,
     selectAllReviews,
     selectReviewById
   } from "../controllers/reviewController.js";
   
   const router = express.Router();
   
   // =========================
   // EXISTING WEB ROUTES
   // =========================
   
   router.get("/", homePage);
   
   router.get("/login", loginPage);
   router.post("/login", loginUser);
   
   router.get("/register", registerPage);
   router.post("/register", registerUser);
   
   router.get("/forgot-password", forgotPasswordPage);
   
   router.get("/dashboard", dashboardPage);
   
   router.get("/logout", logoutUser);
   
   
   // =========================
   // USER ROUTES
   // =========================
   
   router.post("/users", insertUser);
   router.get("/users", selectAllUsers);
   router.get("/users/:id", selectUserById);
   
   
   // =========================
   // CATEGORY ROUTES
   // =========================
   
   router.post("/categories", insertCategory);
   router.get("/categories", selectAllCategories);
   router.get("/categories/:id", selectCategoryById);
   
   
   // =========================
   // PRODUCT ROUTES
   // =========================
   
   router.post("/products", insertProduct);
   router.get("/products", selectAllProducts);
   router.get("/products/:id", selectProductById);
   
   
   // =========================
   // ORDER ROUTES
   // =========================
   
   router.post("/orders", insertOrder);
   router.get("/orders", selectAllOrders);
   router.get("/orders/:id", selectOrderById);
   
   
   // =========================
   // REVIEW ROUTES
   // =========================
   
   router.post("/reviews", insertReview);
   router.get("/reviews", selectAllReviews);
   router.get("/reviews/:id", selectReviewById);
   
   
   export default router;
