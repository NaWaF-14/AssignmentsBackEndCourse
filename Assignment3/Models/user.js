const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: String,
  lastNAme: String,
  birthDate: String,
  isMarried: Boolean,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
