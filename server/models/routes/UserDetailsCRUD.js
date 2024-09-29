  // userRoutes.js
  const express = require("express");
  const UserModel = require("../../models/Users");

  const userData = express.Router();

  // GET all users
  userData.get("/getUsers", (req, res) => {
    console.log("request body get busers ", req.body);

    UserModel.find({})
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });

  // POST to create a new user
  userData.post("/createUser", (req, res) => {
    UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });

  // GET user by ID for updating
  userData.get("/getUpdateUsers/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });

  // PUT to update a user by ID
  userData.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    const { name, email, age } = req.body;

    UserModel.findByIdAndUpdate(
      { _id: id },
      { name: name, email: email, age: age },
      { new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({
          message: "successfully",
          user: updatedUser,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error updating user",
          error: err.message,
        });
      });
  });

  module.exports = userData;
