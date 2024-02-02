import React from "react";
import { Link } from "react-router-dom";

import "../styles/RecipeList.css";

const RecipeList = () => {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  return (
    <div className="recipe-list-container">
      <h2>Recipes</h2>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <li key={index}>
              <Link to={`/recipe/${encodeURIComponent(recipe.name)}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes added yet.</p>
      )}
    </div>
  );
};

export default RecipeList;
