// app.js
const express = require("express");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());

app.use("/", recipeRoutes);

module.exports = app;
