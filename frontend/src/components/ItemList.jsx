import { useEffect, useState, useContext } from "react";
import api from "../lib/api.js";
import { AuthContext } from "../item/authStore.jsx";
import { ITEMS_URL } from "../constants/urls.js";

export default function ItemList() {
  const { token } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get(ITEMS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    if (token) fetchItems();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`${ITEMS_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Items</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.name}</strong> ({item.quantity}) - {item.category}
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
