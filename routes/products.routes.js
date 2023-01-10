const express = require("express");
const { Router } = express;
const ProductsController = require("../controllers/products.controllers");

const productsRouter = Router();
const Products = new ProductsController();

productsRouter.get("/api/products", Products.getProducts);
productsRouter.post("/api/products", Products.saveProduct);
productsRouter.get("/api/products/category/:category", Products.getProductsByCategory);
productsRouter.get("/api/products/id/:id", Products.getProductsById);

module.exports = productsRouter;
