import React from "react";

export default function EcoSummaryCard({ distance, duration, emission, mode }) {
  const modeLabel = mode.charAt(0).toUpperCase() + mode.slice(1);

  const remark =
    emission === "0.00"
      ? "This mode produces zero direct CO₂ emissions."
      : "This mode emits carbon into the atmosphere depending on distance.";

  return (
    <div className="eco-card pop-animate">
      <h4>Carbon Emission Estimate</h4>
      <p><b>Mode:</b> {modeLabel}</p>
      <p><b>Distance:</b> {distance} km</p>
      <p><b>Estimated Time:</b> {duration} min</p>
      <p><b>CO₂ Emitted:</b> {emission} kg CO₂</p>
      <p style={{ color: "#24ca85" }}>{remark}</p>
    </div>
  );
}
