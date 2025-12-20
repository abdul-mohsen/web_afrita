"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PagesNumber({ totalPages }) {
  const [selectedLink, setSelectedLink] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Extract the page number from the URL and set it as the selected link
    const queryPage = parseInt(router.query.page) || 1;
    setSelectedLink(queryPage - 1);
  }, [router.query.page]); // Run effect when the page number in the URL changes

  const handleLinkClick = (index) => {
    setSelectedLink(index);
    // Navigate to the page as indicated by the index
    router.push(`/your-path?page=${index + 1}`); // Change "your-path" to match your routing
  };

  const renderLinks = () => {
    const startPage = Math.max(0, selectedLink - 1);
    const endPage = Math.min(totalPages - 1, selectedLink + 1);

    return (
      <>
        {startPage > 0 && (
          <>
            <a
              href="#"
              className={`py-1 px-2 text-xs rounded-md text-app-gray border-2`}
              onClick={() => handleLinkClick(0)}
            >
              1
            </a>
            {startPage > 1 && <span>...</span>}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <a
            key={startPage + i}
            href="#"
            className={`py-1 px-2 text-xs rounded-md ${selectedLink === startPage + i ? "text-white bg-primary" : "text-app-gray"} border-2`}
            onClick={() => handleLinkClick(startPage + i)}
          >
            {startPage + i + 1}
          </a>
        ))}
        {endPage < totalPages - 1 && (
          <>
            {endPage < totalPages - 2 && <span>...</span>}
            <a
              href="#"
              className={`py-1 px-2 text-xs rounded-md text-app-gray border-2`}
              onClick={() => handleLinkClick(totalPages - 1)}
            >
              {totalPages}
            </a>
          </>
        )}
      </>
    );
  };

  return (
    <div className="flex items-center gap-x-3">
      <h5>الصفحة</h5>
      <div className="flex items-center gap-x-2">{renderLinks()}</div>
    </div>
  );
}
