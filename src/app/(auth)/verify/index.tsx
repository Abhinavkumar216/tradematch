import PrimaryButton from "@/src/components/PrimaryButton";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components/native";
import Pininput from "./components/Pininput";
import ResendText from "./components/ResendText";
import useTimer from "./hooks/useTimer";
import {
  AnimatedImage,
  Container,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
} from "./styles";
import { useLocalSearchParams } from "expo-router";

const INITIAL_TIMEOUT_IN_SECONDS = 10;
const RESEND_TIMEOUT_IN_SECONDS = 10;

const Verify = () => {
  const { mobile } = useLocalSearchParams<{ mobile: string }>();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useTimer(INITIAL_TIMEOUT_IN_SECONDS);

  const onPress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const resendOTP = () => setTimer(RESEND_TIMEOUT_IN_SECONDS);

  return (
    <Container>
      <HorizontalView>
        <AnimatedImage
          source={require("@/src/assets/images/verified-blue.png")}
        />
        <View>
          <LogoHeading>Hey, Guest</LogoHeading>
          <LogoSubHeading>
            We've sent a one-time password (OTP) to your registered mobile
            number +91 {mobile ?? "1234567890"}.
          </LogoSubHeading>
        </View>
      </HorizontalView>
      <Pininput />
      <ResendText onPress={resendOTP} timer={timer} />
      <View style={{ flex: 1 }} />
      <PrimaryButton loading={loading} onPress={onPress} text="Continue" />
    </Container>
  );
};

export default Verify;
