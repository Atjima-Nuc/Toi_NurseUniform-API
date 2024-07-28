const prisma = require("../models/prisma");
const orderService = require("../services/order-service");

const orderControllers = {};

orderControllers.createOrder = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    console.log("req.body", req.body);

    const productId = 1;

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    const shapeId = await prisma.body_measurement.findMany({
      orderBy: { createdAt: "desc" },
      where: { userId: req.user.id },
    });
    // console.log("shapeId==", shapeId[0]);
    // console.log("product", product);
    // console.log("product66666", typeof +product.price);

    const rs = await prisma.order.findMany({
      where: {
        shape: {
          userId: req.user.id,
        },
        orderStatus: "PENDING" || "PROCESSING",
      },
    });
    if (rs.length !== 0) {
      res.status(300).json("มีออเดอร์ซ้ำ");
      return;
    }
    console.log("rsssssssssssssssss", rs);
    await orderService.createOrder(product, quantity, shapeId[0].id);
    res.status(200).json("create success");
  } catch (err) {
    next(err);
  }
};

orderControllers.getOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

orderControllers.getOrdersByUser = async (req, res, next) => {
  try {
    const idUser = req.user.id;
    console.log("idUser888888", idUser);
    const orders = await orderService.getOrderByUser(idUser);
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

orderControllers.getOrdersByAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const orders = await orderService.getOrdersByAdmin(id);
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

orderControllers.updateOrderStatus = async (req, res, next) => {
  const { id } = req.params;
  const { status: orderStatus } = req.body;

  console.log("order status", id);
  console.log("order status----", req.params);

  try {
    await orderService.updateOderStatus(id, orderStatus);
    res.status(200).json(orderService.updateOderStatus);
  } catch (err) {
    next(err);
  }
};

module.exports = orderControllers;
