import React from "react";
import AuthForm from "../components/AuthForm";
export default function Register() {
  const handleRegister = ({ email, password }) => {
    // TODO: Integrate backend
    alert("Registered as " + email);
  };
  return <AuthForm type="register" onSubmit={handleRegister} />;
}
