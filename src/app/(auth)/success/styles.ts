import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const SubHeading = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.light};
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  color: ${({ theme }) => theme.colors.text};
`;
