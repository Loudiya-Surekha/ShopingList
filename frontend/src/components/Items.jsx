import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../item/itemsSlice";
import ItemCard from "./ItemCard";

export default function Items() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading)
    return <p className="text-center mt-5 fs-4 text-primary">Loading items...</p>;

  if (error)
    return (
      <p className="text-center text-danger mt-5 fs-5">
        Error: {error.message || "Something went wrong"}
      </p>
    );

  return (
    <div className="container mt-5">
      {items.length === 0 ? (
        <p className="text-center fs-5">No items added yet!</p>
      ) : (
        <div className="row g-4">
          {items.map((item) => (
            <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
