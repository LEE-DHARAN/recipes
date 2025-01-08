// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection (we'll pass the URI and handle connection in server.js)
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

app.use("/api", recipeRoutes);

module.exports = { app, connectMongoDB };
