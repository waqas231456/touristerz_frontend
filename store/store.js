import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
     name: authSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);