import React from "react";

const ColorStripes = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "200px",
        height: "20px",
        marginBottom: "20px",
      }}
    ></div>
  );
};

export default ColorStripes;
