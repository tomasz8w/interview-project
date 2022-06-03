import React from "react";

import { Menu, MenuItem, MenuProps } from "@mui/material";

import { useAuth } from "app/login/context/authContext";

type Props = MenuProps & {
  close: () => void;
};

const DropdownMenu = ({ close, ...rest }: Props) => {
  const { logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
    close();
  };

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        li: { width: "20ch" },
      }}
      {...rest}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
