
const Recipe = require("../models/recipeModel");



const createRecipe = async (req, res) => {
  try {
       const { title, ingredients, instructions } = req.body;
       const newRecipe = new Recipe({ title, ingredients, instructions });
    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", data: newRecipe });
  } catch (err) {
    res.status(400).json({ message: "Error creating recipe", error: err });
  }
};


const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ data: recipes });
  } catch (err) {
    res.status(400).json({ message: "Error fetching recipes", error: err });
  }
};


const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ data: recipe });
  } catch (err) {
    res.status(400).json({ message: "Error fetching recipe", error: err });
  }
};


const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res
      .status(200)
      .json({ message: "Recipe updated successfully", data: updatedRecipe });
  } catch (err) {
    res.status(400).json({ message: "Error updating recipe", error: err });
  }
};


const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting recipe", error: err });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
