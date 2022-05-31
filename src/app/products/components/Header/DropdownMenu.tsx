import React from "react";

import { Menu, MenuItem, MenuProps } from "@mui/material";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const DropdownMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>Log out</MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
