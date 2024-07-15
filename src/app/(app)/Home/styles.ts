import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { DefaultTheme as DefaultThemeProps } from "styled-components";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
export interface TextProps {
  fontSize?: keyof DefaultThemeProps["typography"]["sizes"];
  color?: keyof DefaultThemeProps["colors"];
  fontWeight?: keyof DefaultThemeProps["typography"]["fontFamily"];
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${statusBarHeight + 10}px;
`;
