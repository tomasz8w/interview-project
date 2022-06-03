import React, { useState } from "react";

import { Link } from "react-router-dom";
import { AppBar, Avatar, Box, Button, ButtonBase } from "@mui/material";

import { AppRoute } from "routing/AppRoute.enum";
import Logo from "app/common/components/Logo";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

import SearchBox from "./SearchBox";
import { useAuth } from "app/login/context/authContext";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const { isMobile } = useMediaQueryMobile();
  const { isAuthenticated, getUser } = useAuth();

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchorEl);

  const user = getUser();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        height: isMobile ? "248px" : "144px",
        transition: "height 0.2s",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          mx: 6,
        }}
      >
        <Logo sx={{ mr: "auto", flex: 1, p: 1 }} />
        <SearchBox />
        <Box sx={{ ml: "auto", order: isMobile ? 2 : 3 }}>
          {isAuthenticated() ? (
            <ButtonBase onClick={handleOpenMenu}>
              <Avatar
                alt={user?.username}
                src={user?.avatar}
                sx={{ width: "48px", height: "48px" }}
              />
            </ButtonBase>
          ) : (
            <Button
              sx={{ px: 4 }}
              component={Link}
              to={AppRoute.Login}
              variant="outlined"
            >
              Log in
            </Button>
          )}
          <DropdownMenu
            anchorEl={menuAnchorEl}
            open={menuOpen}
            close={handleMenuClose}
            onClose={handleMenuClose}
          />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
