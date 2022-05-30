import React from "react";

import usePagination from "@mui/material/usePagination";

const Pagination = () => {
  const { items } = usePagination({ count: 10 });

  return <div>Pagination</div>;
};

export default Pagination;
