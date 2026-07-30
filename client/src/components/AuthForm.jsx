import React, { useState } from "react";
export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="auth-form animated-card" 
          onSubmit={e => { e.preventDefault(); onSubmit({ email, password }); }}>
      <h3>{type === "login" ? "Login" : "Register"}</h3>
      <label>Email</label>
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        type="email" 
        required 
      />
      <label>Password</label>
      <input 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        type="password" 
        required 
      />
      <button>{type === "login" ? "Login" : "Register"}</button>
    </form>
  );
}
