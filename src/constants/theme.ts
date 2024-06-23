import { DefaultTheme as DefaultThemeProps } from "styled-components";

export enum Font {
  Bold = "PoppinsBold",
  Medium = "PoppinsMedium",
  SemiBold = "PoppinsSemiBold",
  Regular = "PoppinsRegular",
  Light = "PoppinsLight",
  Thin = "PoppinsThin",
}

export interface Typography {
  fontFamily: {
    light: Font.Light;
    medium: Font.Medium;
    regular: Font.Regular;
    semiBold: Font.SemiBold;
    bold: Font.Bold;
  };
  sizes: {
    font28: number;
    font26: number;
    font24: number;
    font21: number;
    font18: number;
    font16: number;
    font14: number;
    font12: number;
    font10: number;
    font8: number;
  };
}

export const DefaultConfigs: { typography: Typography } = {
  typography: {
    fontFamily: {
      light: Font.Light,
      medium: Font.Medium,
      regular: Font.Regular,
      semiBold: Font.SemiBold,
      bold: Font.Bold,
    },
    sizes: {
      font28: 28,
      font26: 26,
      font24: 24,
      font21: 21,
      font18: 18,
      font16: 16,
      font14: 14,
      font12: 12,
      font10: 10,
      font8: 8,
    },
  },
};

export const DarkTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: true,
  colors: {
    background: "#101924",
    primary: "#386CFD",
    success: "#00CA48",
    danger: "#FF0B16",
    warning: "#FF9700",
    secondaryBackground: "#9278FD",
    text: "#F4F4F4",
  },
};

export const LightTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: false,
  colors: {
    background: "#ffffff",
    primary: "#386CFD",
    success: "#00CA48",
    danger: "#FF0B16",
    warning: "#FF9700",
    secondaryBackground: "#9278FD",
    text: "#101924",
  },
};

export const DefaultTheme = LightTheme;
