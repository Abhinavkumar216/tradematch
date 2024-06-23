import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { DefaultTheme as DefaultThemeProps } from "styled-components";

export interface TextProps {
  fontSize?: keyof DefaultThemeProps["typography"]["sizes"];
  color?: keyof DefaultThemeProps["colors"];
  fontWeight?: keyof DefaultThemeProps["typography"]["fontFamily"];
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 65px;
  height: 65px;
  position: absolute;
`;

export const Heading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font24}px;
  color: ${({ theme }) => theme.colors.text};
  fontFamily: ${({ theme }) => theme.typography.fontFamily.bold};
`;


export const SubHeading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const HorizontalView = styled(Animated.View)`
  margin-right: -65px;
`;
