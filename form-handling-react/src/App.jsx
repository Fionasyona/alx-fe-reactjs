import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <div>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
