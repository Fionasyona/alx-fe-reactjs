import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Routes>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/add" element={<AddRecipeForm />} />
    </Routes>
    </Routes>
  );
}

export default App;