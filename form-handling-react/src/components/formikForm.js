import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik submitting:", values);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User registered with Formik:", data);
        alert("User registered successfully (Formik)!");
        resetForm();
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="p-4 border rounded shadow w-80 mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Formik Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-2">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
