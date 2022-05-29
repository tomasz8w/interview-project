import React from "react";
import ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProviders } from "providers/AppProviders";

import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./themes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <AppProviders>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
