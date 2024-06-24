import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Animated from "react-native-reanimated";
const Button = Animated.createAnimatedComponent(TouchableOpacity);

type Props = {
  loading: boolean;
  onPress: () => void;
  disabled?: boolean;
  text: string;
};
const PrimaryButton = ({ loading, onPress, disabled, text }: Props) => {
  return (
    <StyledButton onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size={"small"} color={"#fff"} />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </StyledButton>
  );
};

export default PrimaryButton;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 25px;
  border-radius: 14px;
  justify-content: "center";
  align-items: "center";
`;

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.font16}px;
  color: #fff;
  text-align: center;
`;
