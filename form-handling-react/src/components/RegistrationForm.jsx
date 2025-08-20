import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ use plural "errors"
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // ✅ Explicit checks
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // ✅ Clear form fields

    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User registered:", data);
        alert("User registered successfully!");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow w-80 mx-auto mt-6"
    >
      <h2 className="text-xl font-bold mb-4">Controlled Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2"
      >
        Register
      </button>
    </form>
  );
}
