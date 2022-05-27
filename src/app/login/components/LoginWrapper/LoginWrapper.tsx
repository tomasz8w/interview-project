import React from "react";

import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const LoginWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.paper",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default LoginWrapper;
