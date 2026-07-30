import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaLeaf /> Carbon Maps
      </div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Plan Route</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="switch-slider" />
          </label>
        </li>
      </ul>
    </nav>
  );
}
