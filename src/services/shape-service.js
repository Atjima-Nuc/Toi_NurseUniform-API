const prisma = require("../models/prisma");

const shapeService = {};

shapeService.getAllShapeDataByUserId = (userId) =>
  prisma.body_measurement.findMany({
    where: {
      userId: userId,
    },
  });

// Create new shape data
shapeService.createShapeData = (shapeData) =>
  prisma.body_measurement.create({ data: shapeData });

// Update Shape data by userID
shapeService.updateShapeData = (userId, id, shapeData) =>
  prisma.body_measurement.updateMany({
    where: {
      id: id,
      userId: userId,
    },
    data: shapeData,
  });

// Delete shape data by ID
shapeService.deleteShapeData = (userId, id) =>
  prisma.body_measurement.deleteMany({
    where: {
      id: id,
      userId: userId,
    },
  });

module.exports = shapeService;
