const productsService = require("../services/products-service");

const productsControllers = {};

productsControllers.getAllProducts = async (req, res, next) => {
  try {
    const data = await productsService.getAllProducts();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = productsControllers;
