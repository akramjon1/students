import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reAuth } from "./Auth";

export const store = configureStore({
  reducer: combineReducers({
    auth: reAuth,
  }),
  devTools: process.env.NODE_ENV !== "production",
});
