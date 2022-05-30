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
import { useProductSearchParameters } from "app/products/context/searchContext";

const SearchBox = () => {
  const { isMobile } = useMediaQueryMobile();

  const {
    context: { setProductSearchParameters },
  } = useProductSearchParameters();

  const handleActiveChange = (_event: any, checked: boolean) => {
    setProductSearchParameters((prev) => ({ ...prev, active: checked }));
  };
  const handlePromoChange = (_event: any, checked: boolean) => {
    setProductSearchParameters((prev) => ({ ...prev, promo: checked }));
  };
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductSearchParameters((prev) => ({
      ...prev,
      search: event.currentTarget.value,
    }));
  };

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
        onChange={handleTextFieldChange}
      />
      <FormGroup row sx={{ flexWrap: "nowrap" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Active"
          onChange={handleActiveChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Promo"
          onChange={handlePromoChange}
        />
      </FormGroup>
    </Box>
  );
};

export default SearchBox;
