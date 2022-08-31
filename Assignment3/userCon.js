const User = require("./Models/user");
// const app = require("./app");
const mongoose = require("mongoose");
mongoose.connect(process.env.CNSTRING, { useNewUrlParser: true });

// good job
module.exports.allUsers = async (req, res) => {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

// good job
module.exports.addUser = async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      isMarried: req.body.isMarried,
    });

    res.send("New user has been added!");
  } catch (error) {
    console.log(error.message);
  }
};

// good job
module.exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const result = await User.findByIdAndUpdate(id, update);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

// good job
module.exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    res.send("User has been deleted!");
  } catch (error) {
    console.log(error.message);
  }
};
