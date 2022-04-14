const express = require("express");
const productController = require("../controllers/product");
const productRouter = express.Router();

productRouter.route("/")
  .get(productController.getDetails)

module.exports = productRouter;