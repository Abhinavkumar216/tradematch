import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { TextProps } from "../../splash/styles";
import { TouchableOpacity } from "react-native";

const Button = Animated.createAnimatedComponent(TouchableOpacity);

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 65px;
  height: 65px;
`;

export const LogoHeading = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.typography.sizes.font24}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
  text-align: center;
`;

export const LogoSubHeading = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const HorizontalView = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 90%;
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
