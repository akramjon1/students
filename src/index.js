import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./Assets/Global.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </>
);
