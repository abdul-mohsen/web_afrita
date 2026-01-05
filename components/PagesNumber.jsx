"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Pagination({ onPageChange }) {
  const router = useRouter();
  const currentPage = parseInt(router.query.page) || 1; // Default to page 1
  const [selectedLink, setSelectedLink] = useState(currentPage);

  useEffect(() => {
    setSelectedLink(currentPage); // Update local state when URL changes
  }, [currentPage]);

  const handleLinkClick = (pageNumber) => {
    // Update the URL using the router
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: pageNumber },
    });

    setSelectedLink(pageNumber); // Update local state
    onPageChange(); // Notify parent of the page change
  };

  const handleNext = () => handleLinkClick(currentPage + 1); // Move to the next page
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

      <span className="py-1 px-2 text-xs">{currentPage}</span>

      <button
        className="py-1 px-2 text-xs rounded-md text-app-gray border-2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
