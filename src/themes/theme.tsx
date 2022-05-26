import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
    fontSize: 14,
    fontWeightRegular: 600,
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
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#1A1B1D",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          color: "#1A1B1D",
        },
      },
    },
  },
});
