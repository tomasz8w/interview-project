import React from "react";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

const SearchBox = () => {
  const { isMobile } = useMediaQueryMobile();

  return (
    <Box
      sx={{
        flex: 4,
        display: "flex",
        flexDirection: "row",
        flexWrap: isMobile ? "wrap" : "nowrap",
        gap: 2,
        py: 2,
        order: isMobile ? 3 : 2,
        flexBasis: isMobile ? "100%" : "",
      }}
    >
      <TextField
        size="small"
        label="Search"
        fullWidth={isMobile}
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
