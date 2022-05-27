import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
    fontSize: 14,
    fontWeightRegular: 600,
    h6: {
      fontSize: "18px",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "16px",
      color: "#9194A5",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontStyle: "normal",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#E0E2EA",
            },
          },
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
