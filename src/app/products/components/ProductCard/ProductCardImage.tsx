import React from "react";

import { Box, CardMedia, Typography } from "@mui/material";

type Props = {
  imageUrl: string;
  active: boolean;
  promo: boolean;
};

const ProductCardImage = ({ imageUrl, active, promo }: Props) => {
  return (
    <CardMedia
      sx={{ height: "170px", filter: active ? "unset" : "grayscale(100%)" }}
      image={imageUrl}
    >
      {promo && (
        <Box
          sx={{
            backgroundColor: "secondary.main",
            color: "secondary.main",
            position: "relative",
            top: "16px",
            width: "75px",
            height: "24px",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Promo
          </Typography>
        </Box>
      )}
    </CardMedia>
  );
};

export default ProductCardImage;
