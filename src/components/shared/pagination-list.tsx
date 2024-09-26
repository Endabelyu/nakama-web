import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationListProps {
  currentPage: number;
  totalPages: number;
  total: number;
  // onPageChange: (page: number) => void;
}
const PaginationList: React.FC<PaginationListProps> = ({
  currentPage,
  totalPages,
  // onPageChange,
}) => {
  //   const handlePrevious = () => {
  //     if (currentPage > 1) onPageChange(currentPage - 1);
  //   };

  //   const handleNext = () => {
  //     if (currentPage < totalPages) onPageChange(currentPage + 1);
  //   };

  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    const maxVisiblePages = 5;

    // Add first pages
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis if needed
    if (totalPages > maxVisiblePages + 1) {
      //   pageNumbers.push("ellipsis");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handleEllipsisClick = () => {
    const newPages = [];
    const start = Math.min(currentPage + 1, totalPages - 4);
    const end = Math.min(start + 4, totalPages);

    for (let i = start; i <= end; i++) {
      newPages.push(i);
    }

    setVisiblePages(newPages);
  };
  const displayedPages =
    visiblePages.length > 0 ? visiblePages : getPageNumbers();

  //   console.log(displayedPages, "diss");
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>

          {displayedPages.map((page, index) => (
            <PaginationItem key={index}>
              {page > 5 ? (
                <PaginationEllipsis
                  onClick={handleEllipsisClick}
                  className='cursor-pointer'
                />
              ) : (
                <PaginationLink
                  href='#'
                  //   onClick={() => onPageChange(page as number)}
                  isActive={currentPage === (page as number)}
                  className='active:bg-transparent'
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationList;
