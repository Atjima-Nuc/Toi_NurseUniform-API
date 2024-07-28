const prisma = require("../models/prisma");

const orderService = {};

orderService.createOrder = (product, quantity, shapeId) =>
  prisma.order.create({
    data: {
      orderStatus: "PENDING",
      shapeId,
      order_item: {
        create: {
          productId: product.id,
          quantity,
        },
      },
    },
    include: {
      order_item: true,
    },
  });

orderService.getOrders = (id) =>
  prisma.order.findMany({
    include: {
      shape: {
        include: {
          user: true,
        },
      },
      order_item: {
        include: {
          products: true,
        },
      },
    },
  });

orderService.getOrderByUser = (id) =>
  prisma.order.findMany({
    where: {
      shape: {
        userId: id,
      },
    },
    include: {
      shape: {
        include: {
          user: true, // This will include all fields of the user model
        },
      },
      order_item: {
        include: {
          products: true, // Including products related to the order items
        },
      },
    },
  });

orderService.getOrdersByAdmin = (id) =>
  prisma.order.findUnique({
    where: { id: parseInt(id) },
    include: {
      shape: {
        include: {
          user: true,
        },
      },
      order_item: {
        include: {
          products: true,
        },
      },
    },
  });

orderService.updateOderStatus = (id, orderStatus) =>
  prisma.order.updateMany({
    where: {
      id: +id,
    },
    data: { orderStatus },
  });

module.exports = orderService;
