import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { DefaultTheme as DefaultThemeProps } from "styled-components";
import Constants from "expo-constants";

export const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.secbackground};
  padding: 14px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.secbackground};
`;

export const CardHeading = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
`;
export const CardHeadingAlt = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.font12}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
`;

export const CardHeadingSuccess = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const CardSubHeading = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font10}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const HorizontalView = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CountryImage = styled(Animated.Image)`
  width: 24px;
  height: 16px;
  border-radius: 3px;
  margin-right: 10px;
`;

