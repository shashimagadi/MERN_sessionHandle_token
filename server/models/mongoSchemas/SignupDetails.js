const mongoose = require("mongoose");

const Signup = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const SignUpModel = mongoose.model("signup", Signup);
module.exports = SignUpModel;
