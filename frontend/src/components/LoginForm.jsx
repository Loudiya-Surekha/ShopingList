import { useState, useContext } from "react";
import api from "../lib/api.js";          
import { AuthContext } from "../item/authStore.jsx";
import { LOGIN_URL } from "../constants/urls.js";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const res = await api.post(LOGIN_URL, { email, password });

      localStorage.setItem("token", res.data.token);

      login(res.data.user, res.data.token);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="container mt-5 p-4 shadow rounded"
      style={{ maxWidth: "400px" }}
    >
      <h2 className="text-center mb-4">Login</h2>

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
        className="btn btn-primary w-100"
      >
        Login
      </button>

      {error && <p className="text-danger mt-3 text-center">{error}</p>}
    </form>
  );
}
