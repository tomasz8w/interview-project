import React from "react";
import ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProviders } from "providers/AppProviders";

import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import theme from "./themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "app/login/context/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:
        process.env.NODE_ENV === "production" ? 1000 * 60 * 5 : Infinity,
      refetchOnMount: process.env.NODE_ENV === "production" ? true : false,
      refetchOnWindowFocus:
        process.env.NODE_ENV === "production" ? true : false,
    },
  },
});

ReactDOM.render(
  <AppProviders>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
