import React from "react";
import { Link } from "react-router-dom";
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

import { AppRoute } from "routing/AppRoute.enum";
import Logo from "app/common/components/Logo";

const Header = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        height: mobile ? "248px" : "144px",
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

        <Box
          sx={{
            flex: 4,
            display: "flex",
            flexDirection: "row",
            flexWrap: mobile ? "wrap" : "nowrap",
            gap: 2,
            py: 2,
            order: mobile ? 3 : 2,
            flexBasis: mobile ? "100%" : "",
          }}
        >
          <TextField
            size="small"
            label="Search"
            fullWidth={mobile}
            InputProps={{
              endAdornment: <InputAdornment position="end">?</InputAdornment>,
            }}
            sx={{ minWidth: "250px" }}
          />
          <FormGroup row sx={{ flexWrap: "nowrap" }}>
            <FormControlLabel control={<Checkbox />} label="Active" />
            <FormControlLabel control={<Checkbox />} label="Promo" />
          </FormGroup>
        </Box>
        <Button
          component={Link}
          to={AppRoute.Login}
          sx={{ ml: "auto", px: 4, order: mobile ? 2 : 3 }}
          variant="outlined"
        >
          Login
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
