import styled from "styled-components/native";

export const GlobalText = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;