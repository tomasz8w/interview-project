import React from "react";
import { Alert, Box, CircularProgress, Snackbar, styled } from "@mui/material";

import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

import { Header, EmptyListCard, ProductsList, Pagination } from "./components";
import { useProductSearchParameters } from "./context/searchContext";
import { useProductsQuery } from "./store/productsStore";

export const Products = () => {
  const { isMobile } = useMediaQueryMobile();
  const {
    context: { productSearchParameters },
  } = useProductSearchParameters();

  const productsQueryResult = useProductsQuery({
    limit: isMobile ? 4 : 8,
    ...productSearchParameters,
  });

  const products = productsQueryResult.data?.items;

  const emptyList =
    !productsQueryResult.isLoading &&
    (products === undefined || products.length === 0);

  return (
    <ProductWrapper>
      <Header />
      {productsQueryResult.isLoading && (
        <Box sx={{ flex: 1, alignItems: "center", display: "flex" }}>
          <CircularProgress sx={{ justifyContent: "center" }} />
        </Box>
      )}
      {emptyList ? <EmptyListCard /> : <ProductsList products={products} />}

      {productsQueryResult.data && products && products.length > 0 && (
        <Pagination
          next={productsQueryResult.data.links.next}
          previous={productsQueryResult.data.links.previous}
          currentPage={productsQueryResult.data.meta.currentPage}
          totalPages={productsQueryResult.data.meta.totalPages}
        />
      )}
      <Snackbar open={productsQueryResult.isError} autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          {productsQueryResult.error?.message}
        </Alert>
      </Snackbar>
    </ProductWrapper>
  );
};

const ProductWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  alignItems: "center",
});
