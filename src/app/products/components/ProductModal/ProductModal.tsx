import React from "react";

import { Card, Dialog, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import ProductCardImage from "../ProductCard/ProductCardImage";
import ProductCardDescription from "../ProductCard/ProductCardDescription";
import { useProductQuery } from "app/products/store/productsStore";

type Props = {
  isOpen: boolean;
  close: () => void;
  productId: number;
};

const ProductModal = ({ isOpen, close, productId }: Props) => {
  const product = useProductQuery({ productId }).data;

  if (!product) return null;

  return (
    <Dialog open={isOpen} onClose={close}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "70%",
        }}
      >
        <IconButton
          onClick={close}
          sx={{ position: "absolute", top: "3%", right: "3%" }}
        >
          <CloseIcon />
        </IconButton>

        <ProductCardImage
          imageUrl={product.image}
          promo={product.promo}
          active={product.active}
        />
        <ProductCardDescription
          title={product.name}
          description={product.description}
        />
      </Card>
    </Dialog>
  );
};

export default ProductModal;
