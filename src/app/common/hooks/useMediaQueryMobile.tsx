import { useMediaQuery, useTheme } from "@mui/material";

const useMediaQueryMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("desktop"));

  return { isMobile };
};

export default useMediaQueryMobile;
