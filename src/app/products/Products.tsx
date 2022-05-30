import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";

import {
  Header,
  ProductCard,
  EmptyListCard,
  ProductWrapper,
} from "./components";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";
import { useProductsQuery } from "app/products/store/productsStore";

import ProductModal from "./components/ProductModal";
import { useProductSearchParameters } from "./context/searchContext";

export const Products = () => {
  const { isMobile } = useMediaQueryMobile();
  const {
    context: { productSearchParameters },
  } = useProductSearchParameters();

  console.log(productSearchParameters);

  const [clickedProductId, setClickedProductId] = useState<number>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const products = useProductsQuery({
    limit: isMobile ? 4 : 8,
    ...productSearchParameters,
  }).data?.items;

  const handleOpenModal = (productId: number) => {
    setClickedProductId(productId);
    setDialogOpen(true);
  };

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
              <ProductCard
                key={product.id}
                product={product}
                onButtonClick={handleOpenModal}
              />
            ))}
        </Box>
      )}
      {clickedProductId && (
        <ProductModal
          productId={clickedProductId}
          isOpen={dialogOpen}
          close={() => setDialogOpen(false)}
        />
      )}
      <Pagination count={8} sx={{ py: 6 }} boundaryCount={1} siblingCount={1} />
    </ProductWrapper>
  );
};
