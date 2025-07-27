// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoriteList";
import RecommendationsList from "./components/RecommendationsList";


function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorite/:id" element={<FavoritesList/>} />
          <Route path="/recommendation/:id" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
