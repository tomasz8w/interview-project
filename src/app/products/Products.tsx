import React from "react";
import { CircularProgress, styled } from "@mui/material";

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
        <CircularProgress sx={{ justifyContent: "center" }} />
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
