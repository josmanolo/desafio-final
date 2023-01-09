const express = require("express");
const { Router } = express;
const ProductsController = require("../controllers/products.controllers");

const productsRouter = Router();
const Products = new ProductsController();

productsRouter.get("/api/products", Products.getProducts);
productsRouter.post("api/products", Products.saveProduct);

module.exports = productsRouter;
