import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { AppRoute } from "routing/AppRoute.enum";
import Header from "./Header";

export const Products = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ height: "100vh" }}>
        <Link to={AppRoute.Login}> Login </Link>
      </Box>
    </Box>
  );
};
