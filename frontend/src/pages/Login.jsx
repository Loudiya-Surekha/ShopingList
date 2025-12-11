import LoginForm from "../components/LoginForm.jsx";

export default function Login() {
  return (
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <LoginForm />
      </div>
    </div>
  );
}
