import { useContext } from "react";
import { AuthContext } from "../item/authStore.jsx";
import ItemList from "../components/ItemList.jsx";
import { useNavigate } from "react-router-dom";  
import Dashboard from "./Dashboard.jsx";

export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();   

  const handleLogout = () => {
    logout();        
    navigate("/login");  
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Welcome, {user?.name}</h1>

        <button 
          onClick={handleLogout} 
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>

      <Dashboard />
    </div>
  );
}
