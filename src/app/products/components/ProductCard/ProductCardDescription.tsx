import React from "react";

import { CardContent, Typography } from "@mui/material";

const ProductCardDescription = () => {
  return (
    <CardContent
      sx={{ flex: 1, display: "flex", flexDirection: "column", pb: 1 }}
    >
      <Typography variant="h3">Nike running shoes</Typography>
      <Typography variant="caption">
        Buying Used Electronic Test Equipment What S The Difference Between Used
        Refurbished Remarketed And Rebuilt
      </Typography>
    </CardContent>
  );
};

export default ProductCardDescription;
