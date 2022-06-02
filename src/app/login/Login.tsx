import React from "react";

import { Box, styled } from "@mui/material";

import login from "img/login.png";
import Logo from "app/common/components/Logo";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

import LoginForm from "./components/LoginForm";

export const Login = () => {
  const { isMobile } = useMediaQueryMobile();

  return (
    <LoginWrapper>
      <Box
        sx={{
          flex: 1,
          mr: "auto",
          backgroundImage: `url(${login})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: isMobile ? "none" : "block",
          maxWidth: "600px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxWidth: "500px",
          mr: isMobile ? "unset" : "auto",
          px: 3,
          py: 5,
        }}
      >
        <Logo />
        <LoginForm />
      </Box>
    </LoginWrapper>
  );
};

const LoginWrapper = styled("div")({
  display: "flex",
  backgroundColor: "background.paper",
  justifyContent: "center",
  height: "100vh",
});
