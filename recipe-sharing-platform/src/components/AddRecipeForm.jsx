import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Please include at least two ingredients";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps,
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            rows="3"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            rows="4"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
