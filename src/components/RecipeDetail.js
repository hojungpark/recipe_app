import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RecipeDetail.css";

const RecipeDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const recipe = recipes.find((r) => decodeURIComponent(name) === r.name);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleDelete = () => {
    const recipeIndex = recipes.findIndex((r) => r.name === recipe.name);
    recipes.splice(recipeIndex, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    navigate("/");
  };

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetail;
