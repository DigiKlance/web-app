/* Instruments */
import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice, counterSlice } from "./slices";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
});
