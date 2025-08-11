import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Tailwind is Working!
      </h1>

      <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>

      <p className="mt-4 text-gray-600">
        If this text is styled and centered, Tailwind is active.
      </p>
    </div>
  );
}

export default App;
