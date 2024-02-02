import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./components/AddRecipe";
import "./styles/App.css"; // Ensure CSS is properly imported

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-recipe">Add Recipe</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route
            path="/recipe/:name"
            element={<RecipeDetail recipes={recipes} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe onAddRecipe={addRecipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
