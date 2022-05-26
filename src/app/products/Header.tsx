import React from "react";

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
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      sx={{
        justifyContent: "center",
        height: sm ? "248px" : "144px",
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
        <Typography sx={{ mr: "auto", flex: 1, p: 1 }} variant="h5">
          join.tsh.io
        </Typography>
        <Box
          sx={{
            flex: 4,
            display: "flex",
            flexDirection: "row",
            flexWrap: sm ? "wrap" : "nowrap",
            gap: 2,
            py: 2,
            order: sm ? 3 : 2,
            flexBasis: sm ? "100%" : "",
          }}
        >
          <TextField
            size="small"
            label="Search"
            fullWidth={sm}
            InputProps={{
              endAdornment: <InputAdornment position="end">?</InputAdornment>,
            }}
          />
          <FormGroup row sx={{ flexWrap: "nowrap" }}>
            <FormControlLabel control={<Checkbox />} label="Active" />
            <FormControlLabel control={<Checkbox />} label="Promo" />
          </FormGroup>
        </Box>
        <Button
          sx={{ ml: "auto", px: 4, order: sm ? 2 : 3 }}
          variant="outlined"
        >
          Log in
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
