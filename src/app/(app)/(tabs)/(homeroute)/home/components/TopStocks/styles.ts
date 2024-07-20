import { GlobalText } from "@/src/components/Global/Text";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border-radius: 15px;
`;
export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.secbackground};
  border-radius: 15px;
  margin-top: 15px;
  padding: 4px 4px;
`;

export const CardHeading = styled(GlobalText)`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
`;
export const Price = styled(GlobalText)<{ $isBullish: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  color: ${(props) =>
    props.$isBullish ? props.theme.colors.success : props.theme.colors.danger};
`;

export const PriceWrap = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
`;

export const PlayerImage = styled(Animated.Image)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const CardSubHeading = styled(GlobalText)`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font10}px;
  color: ${({ theme }) => theme.colors.secText};
`;
export const HorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Saperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secText + 20};
  align-self: center;
`;

export const PageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const PageButton = styled.TouchableOpacity<{$isFirst?: boolean}>`
  align-items: center;
  margin-left: ${(props) => (props.$isFirst ? '0px' : '20px')};
`;

export const PageText = styled(GlobalText)<{ $isSelected: boolean }>`
  font-family: ${(props) =>
    props.$isSelected
      ? props.theme.typography.fontFamily.medium
      : props.theme.typography.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${(props) => props.$isSelected ? props.theme.colors.primary : props.theme.colors.secText};
`;
