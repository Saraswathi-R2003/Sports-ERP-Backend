require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Server Start + URL display
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started successfully!");
  console.log(`Base URL        : http://localhost:${PORT}`);
  console.log(`SIGN UP (POST)  : http://localhost:${PORT}/api/auth/register`);
  console.log(`SIGN UP (GET)   : http://localhost:${PORT}/api/auth/register`);
  console.log(`SIGN IN (POST)  : http://localhost:${PORT}/api/auth/login`);
  console.log(`SIGN IN (GET)   : http://localhost:${PORT}/api/auth/login`);
});
