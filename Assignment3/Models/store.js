const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  productName: String,
  amount: Number,
  lastUpdated: String,
  distributors: Array,
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
