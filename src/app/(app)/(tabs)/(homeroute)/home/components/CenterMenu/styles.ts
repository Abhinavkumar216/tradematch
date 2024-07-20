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
export const MenuContainer = styled.View`
  background-color: ${(props) => props.theme.colors.secbackground};
  margin-top: 15px;
  border-radius: 50px;
  padding: 15px 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`;

export const MenuWraper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const CardSubHeading = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font14}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
  margin-bottom: -5px;
`;

export const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secText + 20};
  position: relative;
  top: 40px;
`;
export const Saperator = styled.View`
 height: 18px;
    width: 1px;
    margin-horizontal: 10px;
    background-color: ${({ theme }) => theme.colors.secText + 20};
`;
