import React from "react";

import { Box, Button, Card, CardActions } from "@mui/material";

import ProductCardDescription from "./ProductCardDescription";
import ProductCardImage from "./ProductCardImage";
import RatingStar from "./RatingStar";

const ProductCard = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <ProductCardImage />
      <ProductCardDescription />
      <Box sx={{ display: "flex", mt: "auto", pl: 1 }}>
        <RatingStar />
      </Box>
      <CardActions sx={{ mb: 2 }}>
        <Button variant="contained" fullWidth>
          Show details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
