import React from "react";

import { Box, Button, Card, CardActions } from "@mui/material";

import ProductCardDescription from "./ProductCardDescription";
import ProductCardImage from "./ProductCardImage";
import RatingStar from "./RatingStar";
import { Product } from "api/productsApi";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <ProductCardImage
        imageUrl={product.image}
        promo={product.promo}
        active={product.active}
      />
      <ProductCardDescription
        title={product.name}
        description={product.description}
      />
      <Box sx={{ display: "flex", mt: "auto", pl: 1 }}>
        <RatingStar starsCount={product.rating} />
      </Box>
      <CardActions sx={{ mb: 2 }}>
        <Button variant="contained" fullWidth disabled={!product.active}>
          Show details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
