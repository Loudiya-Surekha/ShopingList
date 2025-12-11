import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <Outlet />
      </div>
    </div>
  );
}
