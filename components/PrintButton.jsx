// components/PrintButton.jsx
import React from "react";

const PrintButton = ({ componentId }) => {
  const handlePrint = () => {
    const printContent = document.getElementById(componentId);
    const newWindow = window.open("", "_blank");
    newWindow.document.write("<html><head><title>Print</title>");
    newWindow.document.write("</head><body>");
    newWindow.document.write(printContent.innerHTML);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Print Component
    </button>
  );
};

export default PrintButton;
