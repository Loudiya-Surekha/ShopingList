import AddItemForm from "../components/AddItemForm.jsx";
import Items from "../components/Items.jsx";

export default function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Shopping List</h1>

      <div className="mb-4 p-3 shadow-sm rounded bg-light">
        <AddItemForm />
      </div>

      <div className="mt-3">
        <Items />
      </div>
    </div>
  );
}
