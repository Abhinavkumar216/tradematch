/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColor = "#366bfe";
const tintColor2 = "#9177fd";
// const tintColorDark = "#101924";

type ColorShade = {
  [key: string]: string;
};

type MyColorsType = {
  [key: string]: ColorShade;
};

export const MyColors: MyColorsType = {
  orange: {
    "orange-50": "#fff5e6",
    "orange-100": "#ffdfb0",
    "orange-200": "#ffcf8a",
    "orange-300": "#ffb954",
    "orange-400": "#ffac33",
    "orange-500": "#ff9700",
    "orange-600": "#e88900",
    "orange-700": "#b56b00",
    "orange-800": "#8c5300",
    "orange-900": "#6b3f00",
  },
  white: {
    white: "#ffffff",
    "white-400": "#f6f6f6",
    "white-500": "#f4f4f4",
    "white-600": "#dedede",
    dark: "#101924",
  },
  blue: {
    "blue-50": "#ebf0ff",
    "blue-100": "#c1d1ff",
    "blue-200": "#a3bbff",
    "blue-300": "#789cfe",
    "blue-400": "#5e89fe",
    "blue-500": "#366bfe",
    "blue-600": "#3161e7",
    "blue-700": "#264cb4",
    "blue-800": "#1e3b8c",
    "blue-900": "#172d6b",
  },
  purple: {
    "purple-50": "#f4f1ff",
    "purple-100": "#ddd5fe",
    "purple-200": "#ccc0fe",
    "purple-300": "#b5a4fe",
    "purple-400": "#a792fd",
    "purple-500": "#9177fd",
    "purple-600": "#846ce6",
    "purple-700": "#6754b4",
    "purple-800": "#50418b",
    "purple-900": "#3d326a",
  },

  green: {
    "green-50": "#e6faed",
    "green-100": "#b0efc6",
    "green-200": "#8ae7ab",
    "green-300": "#54db84",
    "green-400": "#33d56d",
    "green-500": "#00ca48",
    "green-600": "#00b842",
    "green-700": "#008f33",
    "green-800": "#006f28",
    "green-900": "#00551e",
  },
  red: {
    "red-50": "#ffe7e8",
    "red-100": "#ffb4b7",
    "red-200": "#ff8f94",
    "red-300": "#ff5c63",
    "red-400": "#ff3d45",
    "red-500": "#ff0c16",
    "red-600": "#e80b14",
    "red-700": "#b50910",
    "red-800": "#8c070c",
    "red-900": "#6b0509",
  },
};

export const Colors = {
  light: {
    text1: "#697584",
    text2: "#263A50",
    tint: tintColor,
    Surface1: "#FFFFFF ",
    Surface2: "#F4F4F4",
    ...MyColors,
  },

  dark: {
    text1: "#F4F4F4",
    text2: "#EAEBED",
    Surface1: "#263A50",
    Surface2: "#101924",
    tint: tintColor,
    ...MyColors,
  },
};
