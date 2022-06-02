import React, { useState } from "react";

import { Box } from "@mui/material";

import { Product } from "app/products/services/productsService";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

import ProductCard from "../ProductCard";
import ProductModal from "../ProductModal";

type Props = {
  products: Product[] | undefined;
};

const ProductsList = ({ products }: Props) => {
  const [clickedProductId, setClickedProductId] = useState<number>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isMobile } = useMediaQueryMobile();
  const itemsOnPage = products?.length ?? 0;

  const handleOpenModal = (productId: number) => {
    setClickedProductId(productId);
    setDialogOpen(true);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 6,
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: isMobile
          ? "minmax(200px, 500px)"
          : "repeat(4,minmax(200px,1fr))",
        gridTemplateRows: isMobile
          ? `repeat(${itemsOnPage},400px)`
          : `repeat(${itemsOnPage > 4 ? 2 : 1},400px)`,
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
      {clickedProductId && (
        <ProductModal
          productId={clickedProductId}
          isOpen={dialogOpen}
          close={() => setDialogOpen(false)}
        />
      )}
    </Box>
  );
};

export default ProductsList;
