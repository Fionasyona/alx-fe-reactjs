import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponent from "./components/PostsComponent";


function App() {
  return (
    <div>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
