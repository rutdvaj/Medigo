import React from "react";
const EllipseShape = () => {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Ellipse element */}
      <ellipse
        cx="100" // x-axis coordinate of the center
        cy="100" // y-axis coordinate of the center
        rx="80" // Radius along x-axis (horizontal radius)
        ry="50" // Radius along y-axis (vertical radius)
        fill="#C7D7FE" // Fill color
        stroke="blue" // Border color
        strokeWidth="2" // Border thickness
      />
    </svg>
  );
};

export default EllipseShape;
