import React from "react";

import { Box, ButtonBase, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import login from "img/login.png";
import Logo from "app/common/components/Logo";

import { LoginForm, LoginWrapper } from "./components";

export const Login = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LoginWrapper>
      <Box
        sx={{
          flex: 1,
          mr: "auto",
          backgroundImage: `url(${login})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: mobile ? "none" : "block",
          maxWidth: "600px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxWidth: "500px",
          mr: mobile ? "unset" : "auto",
          px: 3,
          py: 5,
        }}
      >
        <ButtonBase
          component={Link}
          to={AppRoute.Home}
          sx={{ justifyContent: "left" }}
        >
          <Logo />
        </ButtonBase>
        <LoginForm />
      </Box>
    </LoginWrapper>
  );
};
