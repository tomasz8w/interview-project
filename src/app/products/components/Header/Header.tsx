import React from "react";

import { Link } from "react-router-dom";
import { AppBar, Box, Button } from "@mui/material";

import { AppRoute } from "routing/AppRoute.enum";
import Logo from "app/common/components/Logo";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

import SearchBox from "./SearchBox";

const Header = () => {
  const { isMobile } = useMediaQueryMobile();

  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        height: isMobile ? "248px" : "144px",
        transition: "height 0.2s",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          mx: "10%",
        }}
      >
        <Logo sx={{ mr: "auto", flex: 1, p: 1 }} />
        <SearchBox />
        <Button
          component={Link}
          to={AppRoute.Login}
          sx={{ ml: "auto", px: 4, order: isMobile ? 2 : 3 }}
          variant="outlined"
        >
          Login
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
