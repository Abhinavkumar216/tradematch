import styled from "styled-components/native";
import { TextProps } from "../../splash/styles";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const Button = Animated.createAnimatedComponent(TouchableOpacity);
const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${statusBarHeight + 10}px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 65px;
  height: 65px;
`;

export const LogoHeading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font24}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const LogoSubHeading = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const HorizontalView = styled(Animated.View)`
  flex-direction: row;
  margin-left: -6px;
  margin-top: 12px;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 25px;
  border-radius: 14px;
  justify-content: "center";
  align-items: "center";
  margin-top: 10px;
`;

export const ButtonText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  color: #fff;
  text-align: center;
`;

export const InputWrapper = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.text + 50};
  border-radius: 12px;
`;

export const CountryCode = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: 16px;
  margin-bottom: -3px;
  color: ${({ theme }) => theme.colors.text + 95};
`;

export const InputStyle = styled.TextInput`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  flex: 1;
  padding: 16px 0px;
  font-size: 16px;
  margin-bottom: -3px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ReferButton = styled(Button)`
  margin-top: 16px;
  flex-direction: row;
`;
