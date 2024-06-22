import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/features/theme/themeSlice";
import { Colors } from "../constants/Colors";
import Animated from "react-native-reanimated";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSurface2({ style, ...otherProps }: ThemedViewProps) {
  const darkMode = useSelector(selectTheme);

  const backgroundColor = Colors[darkMode ? "dark" : "light"]["Surface2"];

  return <Animated.View style={[{ backgroundColor }, style]} {...otherProps} />;
}
export function ThemedSurface1({ style, ...otherProps }: ThemedViewProps) {
  const darkMode = useSelector(selectTheme);

  const backgroundColor = Colors[darkMode ? "dark" : "light"]["Surface1"];

  return <Animated.View style={[{ backgroundColor }, style]} {...otherProps} />;
}
