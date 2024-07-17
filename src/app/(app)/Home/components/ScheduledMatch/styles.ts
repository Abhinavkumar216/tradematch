import { GlobalText } from "@/src/components/Global/Text";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const CardWrapper = styled.View`
margin-top: 16px;
`;
export const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.secbackground};
  padding: 14px;
  margin-top: 8px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.secbackground};
`;

export const Menu = styled(GlobalText)`
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const CardHeading = styled(GlobalText)`
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;

export const CountryName = styled(GlobalText)`
font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;

export const TimingWrap = styled.View

export const TimingHeading = styled(CardHeading)`
text-align: right;
`;
export const TimingValue = styled(GlobalText)`
  color: ${({ theme }) => theme.colors.warning};
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  text-align: right;
`;
export const ScheduledValue = styled(GlobalText)`
  color: ${({ theme }) => theme.colors.secText};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  text-align: right;
`;

export const CountryImage = styled(Animated.Image)`
  width: 24px;
  height: 16px;
  border-radius: 3px;
  margin-right: 10px;
`;

export const HorizontalView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CouuntryWrap = styled(HorizontalView)`
  justify-content: flex-start;
  margin-top: 5px;
`
export const BottomWarper = styled(HorizontalView)`
  margin-top: 10px;
`

