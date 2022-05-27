import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import {
  Header,
  ProductCard,
  EmptyListCard,
  ProductWrapper,
} from "./components";

export const Products = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const empty = true;

  return (
    <ProductWrapper>
      <Header />
      {empty ? (
        <EmptyListCard />
      ) : (
        <Box
          sx={{
            py: 6,
            px: 6,
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: mobile
              ? "minmax(200px, 500px)"
              : "repeat(4,minmax(200px,1fr))",
            gridTemplateRows: mobile ? "repeat(4,400px)" : "repeat(2,400px)",
            columnGap: 3,
            rowGap: 4,
          }}
        >
          <ProductCard />
          <ProductCard />
        </Box>
      )}
    </ProductWrapper>
  );
};
