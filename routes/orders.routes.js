const express = require("express");
const { Router } = express;
const OrdersController = require("../controllers/orders.controllers");

const ordersRouter = Router();
const Orders = new OrdersController();

ordersRouter.get("/api/orders", Orders.getOrder);
ordersRouter.post("api/orders", Orders.saveOrder);

module.exports = ordersRouter;
