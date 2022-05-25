import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";

export const Products = () => {
  return (
    <Box>
      <AppBar sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            mx: "10%",
          }}
        >
          <Typography sx={{ mr: "auto" }} variant="h5">
            join.tsh.io
          </Typography>
          <FormGroup sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <TextField
              size="small"
              label="Search"
              InputProps={{
                endAdornment: <InputAdornment position="end">?</InputAdornment>,
              }}
            />
            <FormControlLabel control={<Checkbox />} label="Active" />
            <FormControlLabel control={<Checkbox />} label="Promo" />
          </FormGroup>
          <Button sx={{ ml: "auto", px: 4 }} variant="outlined">
            Log in
          </Button>
        </Box>
      </AppBar>
      <Box sx={{ height: "100vh" }}>
        <Link to={AppRoute.Login}> Login </Link>
      </Box>
    </Box>
  );
};
