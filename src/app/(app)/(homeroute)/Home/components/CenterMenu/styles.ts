import styled from "styled-components/native";


export const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.secbackground};
  margin-top: 15px;
  border-radius: 50px;
  padding: 15px 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`;

export const CardSubHeading = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
  margin-bottom: -5px;
`;