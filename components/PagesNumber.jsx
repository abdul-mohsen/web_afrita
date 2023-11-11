'use client'
import React, { useState } from 'react';

export default function PagesNumber() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedLink, setSelectedLink] = useState(0);
  const lastIndex = testArray.length - 1


  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  return (
    <div className="flex items-center gap-x-3">
      <h5>الصفحة</h5>
      <div className="flex items-center gap-x-2">
        {testArray.slice(0, 3).map((_, i) => (
          <a
            key={i}
            href="#"
            className={`w-[25px] h-[25px] rounded-md  ${selectedLink === i ? "text-white" : "text-app-gray"} text-center border border-2 ${
              selectedLink === i ? "bg-primary" : ""
            }`}
            onClick={() => handleLinkClick(i)}
          >
            {i + 1}
          </a>
        ))}
        <span>...</span>
        <a
          href="#"
          className={`w-[25px] h-[25px]  rounded-md  ${selectedLink === lastIndex ? "text-white" : "text-app-gray"} text-center border border-2 ${
            selectedLink === 9 ? "bg-primary" : ""
          }`}
          onClick={() => handleLinkClick(lastIndex)}
        >
          10
        </a>
      </div>
    </div>
  );
}
