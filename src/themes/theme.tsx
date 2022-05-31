import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
    fontSize: 14,
    fontWeightRegular: 600,
    button: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: 16,
      textTransform: "none",
    },
    h1: {
      fontSize: "30px",
      fontStyle: "normal",
      lineHeight: "40px",
    },
    h2: {
      fontSize: "24px",
      lineHeight: "40px",
    },
    h3: {
      fontSize: "18px",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "16px",
      color: "#9194A5",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "16px",
      color: "#1A1B1D",
    },
  },
  palette: {
    primary: {
      main: "#4460F7",
      dark: "#2140E8",
    },
    secondary: {
      main: "#F9A52B",
    },
    action: {
      hover: "#2140E8",
      disabled: "#9194A5",
      disabledBackground: "#9194A5",
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
      mobile: 0,
      desktop: 900,
    },
  },
});

theme.components = {
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
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
        ":disabled": {
          color: theme.palette.common.white,
        },
      },
      sizeMedium: { height: "38px" },
      sizeLarge: {
        height: "48px",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
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
        color: theme.palette.text.primary,
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
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        color: theme.palette.text.primary,
      },
    },
  },
};

export default theme;
