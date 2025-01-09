# Recipe CRUD Application

A simple Node.js, Express.js, and MongoDB application to manage recipes. It follows the MVC pattern and provides full CRUD functionality for managing recipes.

## Features
- Create, read, update, and delete recipes.
- Store recipes in a MongoDB database.
- API documentation via Postman.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your MongoDB connection in `config/db.js`.
4. Run the app with `node app.js`.

## API Documentation

Use Postman to explore the endpoints:
- POST `/api/recipes`: Create a new recipe.
- GET `/api/recipes`: Get all recipes.
- GET `/api/recipes/:id`: Get a recipe by ID.
- PUT `/api/recipes/:id`: Update a recipe by ID.
- DELETE `/api/recipes/:id`: Delete a recipe by ID.
