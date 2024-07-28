const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { updateOderStatus } = require("../services/order-service");
const orderControllers = require("../controllers/order-controllers");
const checkAdmin = require("../middlewares/checkAdmin");

const orderRouter = express.Router();

orderRouter.post("/", authenticate, orderControllers.createOrder);
orderRouter.get("/byuser", authenticate, orderControllers.getOrdersByUser);

orderRouter.get("/", authenticate, orderControllers.getOrders);
orderRouter.get(
  "/:id",
  authenticate,
  checkAdmin,
  orderControllers.getOrdersByAdmin
);

orderRouter.patch(
  "/:id",
  authenticate,
  checkAdmin,
  orderControllers.updateOrderStatus
);

module.exports = orderRouter;
