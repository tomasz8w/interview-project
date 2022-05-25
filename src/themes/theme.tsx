import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
    fontSize: 14,
    h5: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#4460F7",
    },
    secondary: {
      main: "#F9A52B",
    },
    action: {
      hover: "#2140E8",
      disabled: "#9194A5",
    },
    text: {
      primary: "#1A1B1D",
    },
    background: {
      default: "#F8F8FA",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "144px",
          backgroundColor: "#fff",
          color: "#1A1B1D",
          boxShadow: "none",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#E0E2EA",
          borderRadius: "20px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});
