import React from "react";

  export const StatBlock = ({ icon, label, value }) => (
  <div className="stat">
    {React.cloneElement(icon, { className: 'icon sm stat-icon' })}
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
  </div>
);