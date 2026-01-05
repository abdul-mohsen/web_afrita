"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PagesNumber() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1; // Default to page 1
  const [selectedLink, setSelectedLink] = useState(currentPage);

  useEffect(() => {
    setSelectedLink(currentPage);
  }, [currentPage]);

  const updateQueryParams = (pageNumber) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", pageNumber); // Update the page parameter
    window.history.pushState(
      {},
      "",
      `${pathname}?${newSearchParams.toString()}`,
    ); // Update URL without reloading
  };

  const handleLinkClick = (pageNumber) => {
    setSelectedLink(pageNumber); // Update local state
    updateQueryParams(pageNumber); // Update the URL
  };

  const handleNext = () => {
    handleLinkClick(currentPage + 1); // Move to the next page
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handleLinkClick(currentPage - 1); // Move to the previous page
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      <h5>الصفحة</h5>
      <button
        className="py-1 px-2 text-xs rounded-md text-app-gray border-2"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="py-1 px-2 text-xs">{currentPage}</span>{" "}
      {/* Display current page */}
      <button
        className="py-1 px-2 text-xs rounded-md text-app-gray border-2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
