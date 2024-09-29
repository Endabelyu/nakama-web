import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Button } from "../ui/button";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationListProps {
  currentPage: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
}

const PaginationList: React.FC<PaginationListProps> = ({
  currentPage,
  totalPages,
}) => {
  console.log(currentPage, "currentPage");
  const location = useLocation();
  const startPage = 1;
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setVisiblePages(getPageNumbers(currentPage));
  }, [currentPage]);

  const getPageNumbers = (current: number) => {
    const pageNumbers: number[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than or equal to max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first page

      pageNumbers.push(startPage);

      // Show pages around the current page
      let start = Math.max(2, current - 2);
      let end = Math.min(totalPages - 1, current + 1);

      if (current < 5) {
        start = startPage + 1;
        end = totalPages < maxVisiblePages ? totalPages : maxVisiblePages;
      } else if (
        current >= startPage + 4 &&
        current < totalPages - 3 &&
        current < totalPages
      ) {
        start = current - 1;
        end = Number(current) + 1;
      } else if (current - 3 || current === totalPages) {
        start = totalPages - 4;
        end = totalPages - 1;
      }

      for (let i = start; i <= end; i++) {
        console.log(i, "i");
        pageNumbers.push(i);
      }

      // Add ellipsis if needed
      if (current > startPage + 3) pageNumbers.splice(1, 0, -1); // Ellipsis after 1
      if (current !== totalPages && current < totalPages - 3 && totalPages - 1)
        pageNumbers.push(-2); // Ellipsis before last page

      // Always show the last page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const handlePageClick = (page: number) => {
    console.log(page, "page");
    if (page > 0 && page <= totalPages) {
      console.log(
        location,
        location.pathname.includes("?"),
        "location.pathname",
      );
      if (!location.search.includes("?")) {
        navigate(`?page=${page}`);
      } else {
        if (location.search.includes("page")) {
          const params = new URLSearchParams(location.search);
          params.set("page", page.toString());
          navigate(`?${params.toString()}`);
        } else {
          navigate(`${location.search}&page=${page}`);
        }
      }
    }
  };

  return (
    <div className=''>
      <Pagination>
        <PaginationContent>
          <PaginationItem className='-mr-4'>
            <Button
              variant='outline'
              className='h-8 w-8 p-0 lg:flex bg-transparent text-listHat hover:bg-transparent hover:border-transparent shadow-none hover:scale-110'
              onClick={() => handlePageClick(1)}
              disabled={currentPage === 1}
            >
              <DoubleArrowLeftIcon className='h-4 w-4' />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageClick(currentPage - 1)}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>

          {visiblePages.map((page, index) => (
            <PaginationItem key={index}>
              {page < 0 ? (
                <PaginationEllipsis className='cursor-pointer' />
              ) : (
                <PaginationLink
                  onClick={() => handlePageClick(page)}
                  isActive={currentPage === page}
                  className={`cursor-pointer ${
                    currentPage === page ? "bg-strawHat" : ""
                  }`}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageClick(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
          <PaginationItem className='-ml-4'>
            <Button
              variant='outline'
              className='h-8 w-8 p-0 lg:flex bg-transparent text-listHat hover:bg-transparent hover:border-none hover:border-transparent shadow-none hover:scale-110'
              onClick={() => handlePageClick(totalPages)}
              disabled={currentPage === totalPages}
            >
              <DoubleArrowRightIcon className='h-4 w-4' />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationList;
