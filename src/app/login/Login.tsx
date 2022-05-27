import React from "react";

import {
  Box,
  Button,
  ButtonBase,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import login from "img/login.png";

export const Login = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.paper",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
          mr: "auto",
          backgroundImage: `url(${login})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: mobile ? "none" : "block",
          maxWidth: "500px",
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
          <Typography variant="h2">join.tsh.io</Typography>
        </ButtonBase>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: "12vh" }}
        >
          <Typography variant="h1">Login</Typography>
          <Box>
            <Typography sx={{ py: 1 }} variant="body2">
              Username
            </Typography>
            <TextField fullWidth placeholder="Enter username" id="username" />
          </Box>
          <Box>
            <Typography sx={{ py: 1 }} variant="body2">
              Password
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter password"
              id="password"
              type="password"
            />
          </Box>
          <Button
            sx={{ mt: 6, mb: 1 }}
            variant="contained"
            size="large"
            fullWidth
          >
            Log in
          </Button>
          <Typography variant="caption">Forgot password?</Typography>
        </Box>
      </Box>
    </Box>
  );
};
