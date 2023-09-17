/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ThemeSliceState = {
  value: "system",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    change: (state, action: PayloadAction<"dark" | "light" | "system">) => {
      state.value = action.payload;
    },
  },
});

/* Types */
export interface ThemeSliceState {
  value: "dark" | "light" | "system";
}
