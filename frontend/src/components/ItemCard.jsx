import { useDispatch } from "react-redux";
import { deleteItem } from "../item/itemsSlice";

export default function ItemCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      className="card shadow-sm mb-3"
      style={{
        width: "100%",
        maxWidth: "420px",
        borderRadius: "12px",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">

        <div>
          <h5 className="card-title fw-bold mb-1">{item.name}</h5>

          <span className="badge bg-primary me-2">
            Qty: {item.quantity}
          </span>

          {item.unit && (
            <span className="badge bg-info text-dark me-2">
              {item.unit}
            </span>
          )}

          <span className="badge bg-secondary">
            {item.category}
          </span>
        </div>

        <button
          className="btn btn-danger btn-sm px-2 py-1"
          onClick={() => dispatch(deleteItem(item._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
