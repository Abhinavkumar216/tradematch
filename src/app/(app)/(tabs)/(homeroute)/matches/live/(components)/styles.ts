import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.secbackground};
  padding: 25px;
`;
export const ChipContainer = styled.TouchableOpacity<{ $selected?: boolean }>`
  background-color: ${(props) =>
    props.$selected
      ? props.theme.colors.primary
      : props.theme.colors.background};
  padding: 10px 20px;
  border-radius: 50px;
  margin-right: 15px;
`;

export const Heading = styled.Text<{ $selected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.sizes.font12}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${(props) => props.$selected ? props.theme.typography.fontFamily.medium : props.theme.typography.fontFamily.regular};
`;
