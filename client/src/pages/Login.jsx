import React from "react";
import AuthForm from "../components/AuthForm";
export default function Login() {
  const handleLogin = ({ email, password }) => {
    // TODO: Integrate backend
    alert("Logged in as " + email);
  };
  return <AuthForm type="login" onSubmit={handleLogin} />;
}
