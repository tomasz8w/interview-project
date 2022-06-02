import React from "react";

import { ButtonBase, SxProps, Typography } from "@mui/material";
import { AppRoute } from "routing/AppRoute.enum";
import { Link } from "react-router-dom";

type Props = {
  sx?: SxProps;
};

const Logo = ({ sx }: Props) => (
  <ButtonBase
    component={Link}
    to={AppRoute.Home}
    sx={[{ justifyContent: "left" }, ...(Array.isArray(sx) ? sx : [sx])]}
  >
    <Typography variant="h2">join.tsh.io</Typography>
  </ButtonBase>
);

export default Logo;
