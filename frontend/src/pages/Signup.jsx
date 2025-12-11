import SignupForm from "../components/SignupForm.jsx";

export default function Signup() {
  return (
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <SignupForm />
      </div>
    </div>
  );
}
