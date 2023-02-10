
const express = require("express");
const { Router } = express;
const CartsController = require("../controllers/cart.controllers");

const cartRouter = Router();
const Carts = new CartsController();

cartRouter.get("/api/cart", Carts.getCart);
cartRouter.post("api/cart", Carts.saveCart);
cartRouter.delete("api/cart", Carts.deleteCartById);
cartRouter.post("api/cart/add", Carts.addProductToCart);
cartRouter.put("api/cart", Carts.updateProductInCart);

module.exports = cartRouter;