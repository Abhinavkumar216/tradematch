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

export const AnimatedAvatar = styled(Animated.Image)`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 0px;
  border-color: ${(props) => props.theme.colors.text+50};
  align-self: center;
  margin: 30px 0px;
`;

export const AvatarCollection = styled(Animated.Image)`
  width: 75px;
  height: 75px;
  border-radius: 75px;
`;

export const Wrapper = styled(Button)`
  flex: 1;
  align-items: center;
  margin-bottom: 25px;
`;
