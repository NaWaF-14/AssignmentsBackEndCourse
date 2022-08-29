const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/user", function (req, res) {
  res.sendFile("./views/user.html", { root: __dirname });
});

app.get("/cats", function (req, res) {
  res.sendFile("./views/cats.html", { root: __dirname });
});

app.listen(3000, function () {
  console.log("This app listening on the port 3000");
});
