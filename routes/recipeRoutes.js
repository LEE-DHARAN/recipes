
const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// Create a new recipe
router.post("/recipes", createRecipe);

// Get all recipes
router.get("/recipes", getAllRecipes);

// Get recipe by ID
router.get("/recipes/:id", getRecipeById);

// Update a recipe
router.put("/recipes/:id", updateRecipe);

// Delete a recipe
router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
