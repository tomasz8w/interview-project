import React, { useEffect, useState } from "react";

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
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductSearchParameters((prev) => ({
        ...prev,
        search,
      }));
    }, 800);
    return () => clearTimeout(timeout);
  }, [search]);

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
        value={search}
        fullWidth={isMobile}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ minWidth: "250px" }}
        onChange={(event) => setSearch(event.currentTarget.value)}
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
