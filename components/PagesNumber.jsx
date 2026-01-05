"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PagesNumber({ onPageChange }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [selectedLink, setSelectedLink] = useState(currentPage);

  useEffect(() => {
    setSelectedLink(currentPage);
  }, [currentPage]);

  const updateQueryParams = (pageNumber) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", pageNumber);
    window.history.pushState({}, "", `${pathname}?${newParams.toString()}`);
  };

  const handleLinkClick = (pageNumber) => {
    setSelectedLink(pageNumber);
    updateQueryParams(pageNumber);
    onPageChange(); // Notify parent of the page change
  };

  return (
    <div>
      <button
        onClick={() => handleLinkClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handleLinkClick(currentPage + 1)}>Next</button>
    </div>
  );
}
