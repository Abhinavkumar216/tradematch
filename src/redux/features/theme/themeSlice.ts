import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import { Appearance, useColorScheme } from "react-native";
import { useEffect } from "react";

export interface ThemeState {
  isDarkMode: boolean;
}

export const initializeTheme = (): ThemeState => {
  const currentColorScheme = useColorScheme();

  return {
    isDarkMode: currentColorScheme === "dark",
  };
};

const initialState: ThemeState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (
      state: ThemeState,
      actions: { payload: "LIGHT" | "DARK" }
    ): void => {
      state.isDarkMode = actions.payload.toUpperCase() === "DARK";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state: RootState) => state.theme.isDarkMode;
