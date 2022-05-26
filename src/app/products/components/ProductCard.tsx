import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia sx={{ height: "170px" }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">Nike running shoes</Typography>
        <Typography variant="caption">
          Buying Used Electronic Test Equipment What S The Difference Between
          Used Refurbished Remarketed And Rebuilt
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: 2 }}>
        <Button variant="contained" fullWidth>
          Show details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
