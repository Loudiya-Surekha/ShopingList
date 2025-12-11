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
  // const [showPassword, setShowPassword] = useState(false); 

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
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-white w-100"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="text-center fw-bold mb-4">Your Shopping List Awaits</h3>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <div className="input-group">
            <input
              // type={showPassword ? "text" : "password"}
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Simple Bootstrap toggle button */}
            {/* <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button> */}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger text-center py-2">
            {error}
          </div>
        )}

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-100 mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
