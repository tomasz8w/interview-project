import React from "react";

import { SxProps, Typography } from "@mui/material";

type Props = {
  sx?: SxProps;
};

const Logo = ({ sx }: Props) => (
  <Typography variant="h2" sx={[...(Array.isArray(sx) ? sx : [sx])]}>
    join.tsh.io
  </Typography>
);

export default Logo;
