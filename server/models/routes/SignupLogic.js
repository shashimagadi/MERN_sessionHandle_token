const express = require("express");
const bcrypt = require("bcrypt");
const SignUpModel = require("../mongoSchemas/SignupDetails"); // Adjust the path as necessary
const signup = express.Router();

// POST route for signing up
signup.post("/signup", async (req, res) => {
  console.log("req body signup ", req.body);

  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await SignUpModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new SignUpModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = signup;
