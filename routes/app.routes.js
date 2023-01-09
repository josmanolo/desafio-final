const express = require("express");
const { Router } = express;
const { checkAuth } = require("../utils/helpers");
const AppController = require("../controllers/app.controllers");

const appRouter = Router();
const appController = new AppController();

appRouter.get("/products", checkAuth, appController.renderProducts);
appRouter.get("/chat", checkAuth, appController.renderMessagges);
appRouter.get("/server", appController.renderServerInfo);

module.exports = appRouter;
