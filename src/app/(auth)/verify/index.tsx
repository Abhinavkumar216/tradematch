import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import {
  Container,
  LogoHeading,
  LogoSubHeading,
  HorizontalView,
  AnimatedImage,
  StyledButton,
  ButtonText,
} from "./styles";
import { ThemeContext } from "styled-components/native";
import { Font } from "@/src/constants/theme";
import Pininput from "./components/Pininput";

const Verify = () => {
  const themeContext = useContext(ThemeContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setcode] = useState("");

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      // router.push("/signin");
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <HorizontalView>
        <AnimatedImage
          source={require("@/src/assets/images/verified-blue.png")}
        />
        <View>
          <LogoHeading>Hey, Guest</LogoHeading>
          <LogoSubHeading>
            Just one quick check to make sure you’re really you. We’ve sent a
            one-time password (OTP) to your registered mobile number 9504141640.
          </LogoSubHeading>
        </View>
      </HorizontalView>
      <Pininput />
      <LogoSubHeading>Resend new OTP in 00:29 seconds </LogoSubHeading>
      <View style={{ flex: 1 }} />
      <StyledButton onPress={onStarted}>
        {loading ? (
          <ActivityIndicator size={"small"} color={"#fff"} />
        ) : (
          <ButtonText>Continue</ButtonText>
        )}
      </StyledButton>
    </Container>
  );
};

export default Verify;
