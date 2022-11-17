import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/index";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import appSlice from "./store/services/appServices";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApiProvider api={appSlice}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
