const express = require("express");
const router = express.Router();   //which allows you to create child routes or end points for the api.
const productRouter = require("./product");

router.use("/product",productRouter);

module.exports = router;