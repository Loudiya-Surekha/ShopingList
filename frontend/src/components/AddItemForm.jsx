import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../item/itemsSlice";

export default function AddItemForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("General");
  const [unit, setUnit] = useState("pcs"); 
  const dispatch = useDispatch();

  const unitOptions = {
    General: ["pcs", "pack", "bottle"],
    Groceries: ["kg", "g", "L", "pack"],
    Electronics: ["pcs"],
    Clothing: ["pcs", "pair"],
    Fruits: ["kg", "g", "dozen"],
    Other: ["pcs"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;


    dispatch(addItem({ name, quantity, category, unit }));

    setName("");
    setQuantity("1");
    setCategory("General");
    setUnit("pcs");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form container mt-4">
  <div className="row g-2 align-items-end">

    {/* Item Name */}
    <div className="col-lg-3 col-md-4 col-sm-6">
      <label className="form-label fw-bold">Item Name</label>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-control"
      />
    </div>

    {/* Quantity */}
    <div className="col-lg-1 col-md-2 col-sm-4">
      <label className="form-label fw-bold">Qty</label>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="form-select"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
    </div>

    {/* Category */}
    <div className="col-lg-3 col-md-3 col-sm-6">
      <label className="form-label fw-bold">Category</label>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setUnit(unitOptions[e.target.value][0]);
        }}
        className="form-select"
      >
        <option value="General">General</option>
        <option value="Groceries">Groceries</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Fruits">Fruits</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* Unit */}
    <div className="col-lg-2 col-md-3 col-sm-4">
      <label className="form-label fw-bold">Unit</label>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="form-select"
      >
        {unitOptions[category].map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
    </div>

    {/* Add Button (same line) */}
    <div className="col-lg-2 col-md-12 col-sm-12 d-grid">
      <button type="submit" className="btn btn-primary mt-1">
        Add Item
      </button>
    </div>
  </div>
</form>

  );
}
