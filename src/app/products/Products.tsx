import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";

import {
  Header,
  ProductCard,
  EmptyListCard,
  ProductWrapper,
} from "./components";
import ProductModal from "./components/ProductModal";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";
import { useProductsQuery } from "store/productsStore";

export const Products = () => {
  const { isMobile } = useMediaQueryMobile();

  const [dialogOpen, setDialogOpen] = useState(false);

  const products = useProductsQuery({
    limit: isMobile ? 4 : 8,
    search: "powder",
  }).data?.items;
  console.log(products);

  const empty = false;

  return (
    <ProductWrapper>
      <Header />
      {products && products.length === 0 ? (
        <EmptyListCard />
      ) : (
        <Box
          sx={{
            py: 6,
            px: 6,
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: isMobile
              ? "minmax(200px, 500px)"
              : "repeat(4,minmax(200px,1fr))",
            gridTemplateRows: isMobile ? "repeat(4,400px)" : "repeat(2,400px)",
            columnGap: 3,
            rowGap: 4,
          }}
        >
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Box>
      )}
      <ProductModal isOpen={dialogOpen} close={() => setDialogOpen(false)} />
      <Pagination count={8} sx={{ py: 6 }} boundaryCount={1} siblingCount={1} />
    </ProductWrapper>
  );
};
