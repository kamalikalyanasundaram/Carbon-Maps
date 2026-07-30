import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard animated-card">
      {/* Welcome Message with animated style */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Eco Impact Dashboard</h2>
      
      {/* Current Impact Stats (Animated) */}
      <div className="stats-grid">
        {/* Total Routes & Distance */}
        <div className="stat-box">
          <h3>Total Routes</h3>
          <p className="stat-number">87</p>
          <p className="stat-label">Travelings recorded</p>
        </div>
        {/* CO2 Saved Today */}
        <div className="stat-box">
          <h3>CO₂ Saved</h3>
          <p className="stat-number">+12.56 kg</p>
          <p className="stat-label">Compared to driving</p>
        </div>
        {/* Avg Emission per Trip */}
        <div className="stat-box">
          <h3>Avg Emission</h3>
          <p className="stat-number">0.42 kg</p>
          <p className="stat-label">Per trip</p>
        </div>
        {/* Total Impact Over Time */}
        <div className="stat-box">
          <h3>Total Impact</h3>
          <p className="stat-number">1245 kg</p>
          <p className="stat-label">CO₂ Saved overall</p>
        </div>
      </div>

      {/* Recent Activity Summary */}
      <div className="activity-section" style={{ marginTop: "40px" }}>
        <h3>Recent Activities</h3>
        <ul className="activity-list">
          <li>Logged 12 eco-friendly routes last week</li>
          <li>Saved 8.3 kg CO₂ in your last 3 trips</li>
          <li>Most popular mode: Cycling 🚲</li>
          <li>New feature: Save favorite routes 💾</li>
        </ul>
      </div>

      {/* Impact Visualization */}
      <div className="impact-visualization" style={{ marginTop: "50px" }}>
        <h3>Impact Breakdown</h3>
        <div className="impact-chart"></div>
        {/* Can include animated pie or bar charts using Chart.js or similar */}
      </div>
    </div>
  );
}

