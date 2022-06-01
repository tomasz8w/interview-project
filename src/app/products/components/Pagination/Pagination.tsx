import React from "react";

import { List, Typography } from "@mui/material";
import usePagination from "./usePagination";
import PaginationItem from "./PaginationItem";
import { useProductSearchParameters } from "app/products/context/searchContext";

type Props = {
  next: string;
  previous: string;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ next, previous, currentPage, totalPages }: Props) => {
  const { paginationIndexes } = usePagination(totalPages, currentPage);
  const {
    context: { setProductSearchParameters },
  } = useProductSearchParameters();

  const changePage = (newPage: number) => {
    setProductSearchParameters((prev) => ({ ...prev, page: newPage }));
  };

  const isPrevious = previous !== "";
  const handlePrevious = () => {
    if (isPrevious) changePage(currentPage - 1);
  };
  const isNext = next !== "";
  const handleNext = () => {
    if (isNext) changePage(currentPage + 1);
  };

  return (
    <List sx={{ display: "flex" }}>
      <PaginationItem
        caption="Previous"
        disabled={!isPrevious}
        onClick={handlePrevious}
      />
      {paginationIndexes.map((item, index) => (
        <>
          <PaginationItem
            key={index}
            current={currentPage === item}
            caption={item.toString()}
            onClick={() => changePage(item)}
          />
          {totalPages > 6 && index === 2 && <PaginationItem caption="..." />}
        </>
      ))}
      <PaginationItem caption="Next" disabled={!isNext} onClick={handleNext} />
    </List>
  );
};

export default Pagination;
