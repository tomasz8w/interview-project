import React from "react";

import { ButtonBase, Card, Dialog, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import ProductCardImage from "../ProductCard/ProductCardImage";
import ProductCardDescription from "../ProductCard/ProductCardDescription";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const ProductModal = ({ isOpen, close }: Props) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      <Card
        sx={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <IconButton
          onClick={close}
          sx={{ position: "absolute", top: "3%", right: "3%" }}
        >
          <CloseIcon />
        </IconButton>

        <ProductCardImage />
        <ProductCardDescription />
      </Card>
    </Dialog>
  );
};

export default ProductModal;
