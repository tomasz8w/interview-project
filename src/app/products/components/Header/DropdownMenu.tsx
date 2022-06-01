import React from "react";

import { Menu, MenuItem, MenuProps } from "@mui/material";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const DropdownMenu = (props: MenuProps) => {
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
      {...props}
    >
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
