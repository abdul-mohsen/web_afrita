"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Pagination({ onPageChange }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  useEffect(() => {
    const pageParam = router.query.page; // Get the page from query
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10)); // Update state if a page param exists
    }
  }, [router.query]); // Listen for changes in the router.query

  const navigateToPage = (pageNumber) => {
    const newQuery = { ...router.query, page: pageNumber }; // Update the page number in the query
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
    setCurrentPage(pageNumber); // Update local state for immediate feedback
    onPageChange(); // Notify the parent component about the page change
  };

  const handleNext = () => {
    navigateToPage(currentPage + 1); // Move to the next page
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      navigateToPage(currentPage - 1); // Move to the previous page
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
