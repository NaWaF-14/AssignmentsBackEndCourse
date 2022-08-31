const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const { allUsers, addUser, updateUser, deleteUser } = require("./userCon");
const {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./productCon");

app.get("/users", allUsers);

app.get("/products", allProducts);

app.post("/user", addUser);

app.post("/product", addProduct);

app.put("/user/:id", updateUser);

app.put("/product/:id", updateProduct);

app.delete("/user/:id", deleteUser);

app.delete("/product/:id", deleteProduct);

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});

module.exports = app;
