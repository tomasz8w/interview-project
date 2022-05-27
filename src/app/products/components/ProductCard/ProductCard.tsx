import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

import nike_image from "img/nike_shoes.png";
import RatingStar from "./RatingStar";

const ProductCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia sx={{ height: "170px" }} image={nike_image}>
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
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
      </CardMedia>
      <CardContent
        sx={{ flex: 1, display: "flex", flexDirection: "column", pb: 1 }}
      >
        <Typography variant="h3">Nike running shoes</Typography>
        <Typography variant="caption">
          Buying Used Electronic Test Equipment What S The Difference Between
          Used Refurbished Remarketed And Rebuilt
        </Typography>
        <Box sx={{ display: "flex", mt: "auto" }}>
          <RatingStar />
        </Box>
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
