import PrimaryButton from "@/src/components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ThemeContext } from "styled-components/native";
import Input from "./components/Input";
import {
  AnimatedImage,
  Container,
  CountryCode,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
  ReferButton
} from "./styles";

const Login = () => {
  const themeContext = useContext(ThemeContext);

  const buttonOpacity = useSharedValue(1);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [isReferActive, setIsReferActive] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>("");
  const [referCode, setReferCode] = useState<string>("");

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      router.push({ pathname: "/verify", params: { mobile } });
      setLoading(false);
    }, 1500);
  };

  const handlePress = () => {
    opacity.value = 1;
    translateY.value = -30;
    buttonOpacity.value = 0;
    setIsReferActive(true);
  };

  const imageAnimatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 1000 }),
    transform: [
      { translateY: withTiming(translateY.value * 2, { duration: 1000 }) },
    ],
  }));
  const buttonAnimatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(buttonOpacity.value, { duration: 1000 }),
  }));

  return (
    <Container>
      <HorizontalView>
        <AnimatedImage
          source={require("@/src/assets/images/verified-blue.png")}
        />
        <View>
          <LogoHeading>TradeMatch</LogoHeading>
          <LogoSubHeading> Trade For Every Match</LogoSubHeading>
        </View>
      </HorizontalView>

      <View style={{ marginTop: 25 }}>
        <LogoHeading>Let's Begin!!!</LogoHeading>
        <LogoSubHeading>
          Tell us your mobile number to recieve a one-time password (OTP) for
          Verification.
        </LogoSubHeading>
      </View>

      <Input
        loading={loading}
        value={mobile}
        onChange={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
        placeholder="Mobile Number"
        autoFocus={true}
        dataDetectorTypes={"phoneNumber"}
      >
        <View style={{ padding: 18 }}>
          <CountryCode>+91</CountryCode>
        </View>
      </Input>

      <ReferButton style={buttonAnimatedStyles} onPress={handlePress}>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={themeContext?.colors?.text}
        />
        <LogoSubHeading> Have a Referral Code?</LogoSubHeading>
      </ReferButton>
      <Animated.View style={imageAnimatedStyles}>
        <Input
          loading={loading}
          value={referCode}
          onChange={setReferCode}
          keyboardType={"default"}
          maxLength={10}
          placeholder="Referral Code"
          autoFocus={false}
          dataDetectorTypes={"trackingNumber"}
          editable={isReferActive}
        >
          <View style={{ padding: 20 }}>
            <Ionicons
              name="person"
              size={21}
              color={themeContext?.colors?.text + 80}
            />
          </View>
        </Input>
      </Animated.View>
      <View style={{ flex: 1 }} />
      <LogoSubHeading style={{ fontSize: 12 , marginBottom:10}}>
        By Proceeding, I agree to the T&C and Privacy Policy.
      </LogoSubHeading>
      <PrimaryButton loading={loading} onPress={onStarted} text="Continue" />
    </Container>
  );
};

export default Login;
