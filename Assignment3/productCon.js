const Product = require("./Models/store");
// const app = require("./app");
const mongoose = require("mongoose");
mongoose.connect(process.env.CNSTRING, { useNewUrlParser: true });

module.exports.allProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    await Product.create({
      productName: req.body.productName,
      amount: req.body.amount,
      lastUpdated: req.body.lastUpdated,
      distributors: req.body.distributors,
    });

    res.send("New product has been added!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const result = await Product.findByIdAndUpdate(id, update);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);

    res.send("Product has been deleted!");
  } catch (error) {
    console.log(error.message);
  }
};
