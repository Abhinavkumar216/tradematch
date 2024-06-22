import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";
import Animated from "react-native-reanimated";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  entering?: any;
};

export function ThemedText1({
  style,
  lightColor,
  darkColor,
  entering,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text1");

  return (
    <Animated.Text entering={entering} style={[{ color }, style]} {...rest} />
  );
}
export function ThemedText2({
  style,
  lightColor,
  darkColor,
  entering,
  ...rest
}: ThemedTextProps) {
  
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text2");

  return (
    <Animated.Text entering={entering} style={[{ color }, style]} {...rest} />
  );
}
export function ThemedTextInverted({
  style,
  lightColor,
  darkColor,
  entering,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: darkColor, dark: lightColor }, "text2");

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
