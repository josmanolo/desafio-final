
const express = require("express");
const { Router } = express;
const CartsController = require("../controllers/cart.controllers");

const cartRouter = Router();
const Carts = new CartsController();

cartRouter.get("/api/cart", Carts.getCart);
cartRouter.post("api/cart", Carts.saveCart);

module.exports = cartRouter;