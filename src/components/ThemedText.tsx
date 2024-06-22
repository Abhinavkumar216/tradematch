import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";
import Animated from "react-native-reanimated";
import { selectTheme } from "../redux/features/theme/themeSlice";
import { useSelector } from "react-redux";
import { Colors } from "../constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  entering?: any;
};

export function ThemedText1({ style, entering, ...rest }: ThemedTextProps) {
  const darkMode = useSelector(selectTheme);

  const color = Colors[darkMode ? "dark" : "light"]["text1"];

  return (
    <Animated.Text entering={entering} style={[{ color }, style]} {...rest} />
  );
}
export function ThemedText2({ style, entering, ...rest }: ThemedTextProps) {
  const darkMode = useSelector(selectTheme);

  const color = Colors[darkMode ? "dark" : "light"]["text2"];

  return (
    <Animated.Text entering={entering} style={[{ color }, style]} {...rest} />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
