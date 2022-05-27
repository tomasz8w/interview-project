import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const LoginForm = () => {
  return (
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
      <Button sx={{ mt: 6, mb: 1 }} variant="contained" size="large" fullWidth>
        Log in
      </Button>
      <Typography variant="caption" sx={{ textDecorationLine: "underline" }}>
        Forgot password?
      </Typography>
    </Box>
  );
};

export default LoginForm;
