import { useState } from "react";
import api from "../lib/api.js";
import { SIGNUP_URL } from "../constants/urls.js";
import { useNavigate } from "react-router-dom";   

export default function SignupForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();   

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); 

  if (!name.trim()) return setError("Name is required");
  if (!email.trim()) return setError("Email is required");
  if (!/\S+@\S+\.\S+/.test(email))
    return setError("Invalid email format");
  if (!password.trim()) return setError("Password is required");
  if (password.length < 6)
    return setError("Password must be at least 6 characters");

  try {
    const res = await api.post(SIGNUP_URL, { name, email, password });

    localStorage.setItem("token", res.data.token);

    alert("Signup successful. Please login.");
    navigate("/login");
  } 
 
  catch (err) {
  console.error("FULL ERROR → ", err); 
  console.error("SERVER RESPONSE → ", err.response?.data); 
  setError(err.response?.data?.message || "Signup failed");
}

};

  return (
    <div 
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="p-4 shadow rounded w-100"
        style={{ 
          maxWidth: "380px",
          backgroundColor: "white",
          borderRadius: "12px"
        }}
      >

        {/* Header */}
        <div className="text-center mb-3">
          <div 
            className="d-flex align-items-center justify-content-center rounded bg-primary bg-opacity-10 mx-auto"
          >
          </div>
          <h4 className="fw-bold mt-2 text-dark">Create Your Shopping Hub</h4>
          <p className="text-muted">Get started with your free account</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-danger py-2 text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            style={{ borderRadius: "10px" }}
          >
          Sign Up Now
          </button>

        </form>

        {/* Login Redirect */}
        <div className="text-center mt-3">
          <p className="text-muted mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-primary fw-semibold">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
