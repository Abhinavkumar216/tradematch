import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { OtpInput } from "react-native-otp-entry";
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

const Verify = () => {
  const themeContext = useContext(ThemeContext);
  const [loading, setLoading] = useState<boolean>(false)
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
      <OtpInput
        numberOfDigits={6}
        // blurOnFilled
        autoFocus
        focusColor={themeContext?.colors?.primary}
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          placeholder: "-",
          accessibilityLabel: "One-Time Password",
          placeholderTextColor: "white",
        }}
        theme={{
          containerStyle: styles.Codecontainer,
          pinCodeContainerStyle: {
            ...styles.pinCodeContainer,
            borderColor: themeContext?.colors?.text + 80,
          },
          pinCodeTextStyle: {
            fontSize: 24,
            color: themeContext?.colors?.text,
            fontFamily: Font.Regular,
            marginBottom: -5,
          },
          focusStickStyle: { backgroundColor: themeContext?.colors?.primary },
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
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

const styles = StyleSheet.create({
  Codecontainer: {
    marginTop: 30,
    marginBottom: 20,
    // borderWidth: 1,
  },
  pinCodeContainer: {
    borderWidth: 1,
    // paddingHorizontal:15
  },
  focusStick: {
    // backgroundColor: Colors.light.tint,
  },
  activePinCodeContainer: {
    borderWidth: 1,
  },
  pinCodeText: {
    fontSize: 24,
    // color: Colors.light.Surface2,
    // fontFamily: Fonts.Regular,
    marginBottom: -5,
  },
});
