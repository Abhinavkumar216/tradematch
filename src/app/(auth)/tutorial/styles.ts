import Animated from "react-native-reanimated";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 65px;
  height: 65px;
`;

export const LogoHeading = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.font24}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const LogoSubHeading = styled.Text`
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