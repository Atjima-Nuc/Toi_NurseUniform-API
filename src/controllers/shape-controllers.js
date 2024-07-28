const prisma = require("../models/prisma");
const shapeService = require("../services/shape-service");

const shapeControllers = {};

shapeControllers.getAllAuthShapeData = async (req, res, next) => {
  try {
    const shapeData = await shapeService.getAllShapeDataByUserId(req.user.id);

    res.status(200).json(shapeData);
  } catch (err) {
    next(err);
  }
};

shapeControllers.getAllShapeDataByUserId = async (req, res, next) => {
  try {
    console.log(+req.params.userId);
    const shapeDataByUserId = await shapeService.getAllShapeDataByUserId(
      +req.params.userId
    );
    res.status(200).json(shapeDataByUserId);
  } catch (err) {
    next(err);
  }
};

// Admin can post shape data
shapeControllers.createShapeData = async (req, res, next) => {
  try {
    const data = req.body;

    // Ensure userId exists in the database
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newShapeData = await shapeService.createShapeData(data);
    res.status(201).json(newShapeData);
  } catch (err) {
    next(err);
  }
};

// Admin can edit shape data
shapeControllers.updateShapeData = async (req, res, next) => {
  try {
    const updatedShapeData = await shapeService.updateShapeData(
      req.user.id,
      req.params.id,
      req.body
    );
    if (updatedShapeData.count === 0) {
      res.status(404).json({
        message:
          "Shape data not found or you don't have permission to delete it.",
      });
    } else {
      res.status(200).json(updatedShapeData);
    }
  } catch (err) {
    next(err);
  }
};

// Admin can delete shape data
shapeControllers.deleteShapeData = async (req, res, next) => {
  try {
    const result = await shapeService.deleteShapeData(
      req.user.id,
      req.params.id
    );
    if (result.count === 0) {
      res.status(404).json({
        message:
          "Shape data not found or you don't have permission to delete it.",
      });
    } else res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = shapeControllers;
