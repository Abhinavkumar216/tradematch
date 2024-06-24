import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { TextProps } from "../../splash/styles";
import { TouchableOpacity } from "react-native";

const statusBarHeight = Constants.statusBarHeight;
const Button = Animated.createAnimatedComponent(TouchableOpacity);


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${statusBarHeight + 10}px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 120px;
  height: 120px;
`;

export const LogoHeading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font24}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const LogoSubHeading = styled(Animated.Text)<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const Resendpin = styled(Animated.Text)<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HorizontalView = styled(Animated.View)`
  margin-left: -6px;
  margin-top: 12px;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 15px 0px;
  margin-Bottom: 25px;
  border-radius: 14px;
  justify-content: "center";
  align-items: "center";
`;

export const ButtonText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  color: #fff;
  text-align: center;
`;
