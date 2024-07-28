const express = require("express");
const authenticate = require("../middlewares/authenticate");
const shapeControllers = require("../controllers/shape-controllers");
const checkAdmin = require("../middlewares/checkAdmin");

const shapeRouter = express.Router();

shapeRouter.get("/", authenticate, shapeControllers.getAllAuthShapeData);

shapeRouter.get(
  "/:userId",
  authenticate,
  checkAdmin,
  shapeControllers.getAllShapeDataByUserId
);

shapeRouter.post(
  "/",
  authenticate,
  checkAdmin,
  shapeControllers.createShapeData
);
shapeRouter.patch(
  "/:id",
  authenticate,
  checkAdmin,
  shapeControllers.updateShapeData
);
shapeRouter.delete(
  "/:id",
  authenticate,
  checkAdmin,
  shapeControllers.deleteShapeData
);

module.exports = shapeRouter;
