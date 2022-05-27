import React from "react";

import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const ProductWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </Box>
  );
};

export default ProductWrapper;
