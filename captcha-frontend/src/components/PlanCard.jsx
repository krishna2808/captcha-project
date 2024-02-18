import React from "react";

export const PlanCard = ({ name, price, benifits }) => {
  return (
    <div className="plan-card">
      <p className="plan-name">{name}</p>
      <div className="plan-details">
        <span className="plan-price">₹{price}</span>
        <span className="plan-benifits">{benifits}</span>
      </div>
    </div>
  );
};
