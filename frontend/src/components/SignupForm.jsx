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
    try {
      const res = await api.post(SIGNUP_URL, { name, email, password });

      localStorage.setItem("token", res.data.token);

      alert("Signup successful. Please login.");

      navigate("/login");  
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Signup failed");
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="container mt-5 p-4 shadow rounded"
      style={{ maxWidth: "400px" }}
    >
      <h2 className="text-center mb-4">Signup</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button 
        type="submit"
        className="btn btn-success w-100"
      >
        Signup
      </button>

      {error && <p className="text-danger mt-3 text-center">{error}</p>} 
    </form>
  );
}
