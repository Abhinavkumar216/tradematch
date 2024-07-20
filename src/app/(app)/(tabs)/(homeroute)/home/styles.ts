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

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const LogoHeading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const LogoSubHeading = styled(Animated.Text)<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font10}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-left: 10px;
`;
export const ProfileImage = styled(Animated.Image)`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-left: 10px;
`;

export const HorizontalView = styled(Animated.View)`
  flex-direction: row;
  margin-left: -6px;
  justify-content: space-between;
  align-items: center;
`;
