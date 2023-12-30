const express = require("express");
const app = express();

const products = require("./routes/products");
app.use("/homepage-products", products);
module.exports = app;
