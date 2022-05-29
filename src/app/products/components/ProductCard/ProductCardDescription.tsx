import React from "react";

import { CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
};

const ProductCardDescription = ({ title, description }: Props) => {
  return (
    <CardContent
      sx={{ flex: 1, display: "flex", flexDirection: "column", pb: 1 }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="caption">{description}</Typography>
    </CardContent>
  );
};

export default ProductCardDescription;
