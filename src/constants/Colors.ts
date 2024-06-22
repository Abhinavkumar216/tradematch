/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColor = "#366bfe";
const tintColor2 = "#9177fd";
// const tintColorDark = "#101924";

// type ColorShade = {
//   [key: string]: string;
// };

// type MyColorsType = {
//   [key: string]: ColorShade;
// };

const MyColors = {
  orange50: "#fff5e6",
  orange100: "#ffdfb0",
  orange200: "#ffcf8a",
  orange300: "#ffb954",
  orange400: "#ffac33",
  orange500: "#ff9700",
  orange600: "#e88900",
  orange700: "#b56b00",
  orange800: "#8c5300",
  orange900: "#6b3f00",

  white50: "#ffffff",
  white400: "#f6f6f6",
  white500: "#f4f4f4",
  white600: "#dedede",
  dark: "#101924",

  blue50: "#ebf0ff",
  blue100: "#c1d1ff",
  blue200: "#a3bbff",
  blue300: "#789cfe",
  blue400: "#5e89fe",
  blue500: "#366bfe",
  blue600: "#3161e7",
  blue700: "#264cb4",
  blue800: "#1e3b8c",
  blue900: "#172d6b",

  purple50: "#f4f1ff",
  purple100: "#ddd5fe",
  purple200: "#ccc0fe",
  purple300: "#b5a4fe",
  purple400: "#a792fd",
  purple500: "#9177fd",
  purple600: "#846ce6",
  purple700: "#6754b4",
  purple800: "#50418b",
  purple900: "#3d326a",

  green50: "#e6faed",
  green100: "#b0efc6",
  green200: "#8ae7ab",
  green300: "#54db84",
  green400: "#33d56d",
  green500: "#00ca48",
  green600: "#00b842",
  green700: "#008f33",
  green800: "#006f28",
  green900: "#00551e",

  red50: "#ffe7e8",
  red100: "#ffb4b7",
  red200: "#ff8f94",
  red300: "#ff5c63",
  red400: "#ff3d45",
  red500: "#ff0c16",
  red600: "#e80b14",
  red700: "#b50910",
  red800: "#8c070c",
  red900: "#6b0509",
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
    Surface1: "#222232",
    Surface2: "#101924",
    tint: tintColor,
    ...MyColors,
  },
};
