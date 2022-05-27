import React from "react";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBox = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ minWidth: "250px" }}
      />
      <FormGroup row sx={{ flexWrap: "nowrap" }}>
        <FormControlLabel control={<Checkbox />} label="Active" />
        <FormControlLabel control={<Checkbox />} label="Promo" />
      </FormGroup>
    </Box>
  );
};

export default SearchBox;
