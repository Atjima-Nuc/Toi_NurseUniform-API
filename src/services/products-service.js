const prisma = require("../models/prisma");

const productsService = {};

productsService.getAllProducts = () => prisma.product.findMany();

module.exports = productsService;
