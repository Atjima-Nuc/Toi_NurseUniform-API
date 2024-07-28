const express = require("express");
const authenticate = require("../middlewares/authenticate");
const productsControllers = require("../controllers/products-controllers");

const productsRouter = express.Router();

productsRouter.get("/", authenticate, productsControllers.getAllProducts);

module.exports = productsRouter;
