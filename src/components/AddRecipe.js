import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipe.css";

function AddRecipe({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(newRecipe);
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = [...existingRecipes, newRecipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/");
  };

  return (
    <div className="add-recipe-page">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipeName">Recipe Name</label>
        <input
          id="recipeName"
          type="text"
          className="input-field"
          placeholder="Enter recipe name"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          required
        />

        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          type="text"
          className="input-field"
          placeholder="List ingredients separated by commas"
          value={newRecipe.ingredients}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, ingredients: e.target.value })
          }
          required
        />

        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          className="textarea-field"
          placeholder="Describe the preparation steps"
          value={newRecipe.instructions}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, instructions: e.target.value })
          }
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
