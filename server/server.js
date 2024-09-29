const express = require("express");
const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const connectDB = require("./db");
require("dotenv").config();
const verifyToken = require("./models/routes/verifyToken");

const app = express();
app.use(express.json());
const cors = require("cors");
const PORT = process.env.PORT;
app.use(cors());

// Connect to the MongoDB database
connectDB();

const signupRoute = require("./models/routes/SignupLogic");
app.use("/sign", signupRoute);

const login = require("./models/routes/LoginRouter");
app.use("/login", login);

const userData = require("./models/routes/UserDetailsCRUD");

app.use("/", verifyToken, userData);

app.listen(3000, () => {
  console.log(`server running`);
});
