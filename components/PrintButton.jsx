// components/PrintButton.jsx
import React from "react";

const PrintButton = () => {
  const handlePrint = () => {
    window.print(); // Open print dialog
  };

  return (
    <button onClick={handlePrint} style={buttonStyle}>
      Print
    </button>
  );
};

// Inline styles for the button
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default PrintButton;
