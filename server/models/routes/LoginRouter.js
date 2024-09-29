const express = require("express");
const bcrypt = require("bcrypt");
const SignUpModel = require("../mongoSchemas/SignupDetails"); // Adjust the path as necessary
const login = express.Router();
const jwt = require("jsonwebtoken");

login.post("/loginDetails", async (req, res) => {
  const { name, password } = req.body;
  console.log("req body ", req.body);
  try {
    // Find the user by email
    const user = await SignUpModel.findOne({ name });
    console.log("userr", user);

    if (!user) {
      return res.json({ message: "userNot" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "invalid" });
    }

    // Generate a token (optional)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1m",
    }); // Use your secret
    console.log("token ", token);
    // Return success response
    return res.json({ message: "success", token }); // Optionally send token
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = login;
