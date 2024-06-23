import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ThemedSurface2 } from "../components/ThemedView";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { ThemedText1, ThemedText2 } from "../components/ThemedText";
import { StatusBar } from "expo-status-bar";
import { Fonts } from "../constants/Fonts";
import { OtpInput } from "react-native-otp-entry";
import { selectTheme } from "../redux/features/theme/themeSlice";
import { useSelector } from "react-redux";

const statusBarHeight = Constants.statusBarHeight;

const Verification = () => {
  const theme = useSelector(selectTheme);
  const [code, setcode] = useState("");
  const [loading, setLoading] = useState(false)

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      // router.push("/signin");
      setLoading(false);
    }, 1500);
  };

  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar animated style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/verified-blue.png")}
          style={[styles.image]}
        />
        <ThemedText1 style={styles.title}>Hey, Guest</ThemedText1>
        <ThemedText1 style={styles.subtitle}>
          Just one quick check to make sure you’re really you. We’ve sent a
          one-time password (OTP) to your registered mobile number 9504141640.
        </ThemedText1>
      </View>
      <OtpInput
        numberOfDigits={6}
        // blurOnFilled
        autoFocus
        focusColor={Colors.light.tint}
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          placeholder: "-",
          accessibilityLabel: "One-Time Password",
          placeholderTextColor:'white'
        }}
        theme={{
          containerStyle: styles.Codecontainer,
          pinCodeContainerStyle: {
            ...styles.pinCodeContainer,
            borderColor: theme ? Colors.dark.Surface1 : Colors.light.white600,
            
          },
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
      <ThemedText1 style={styles.subtitle}>Resend new OTP in 00:29 seconds</ThemedText1>
      <View style={{flex:1}}/>
      <TouchableOpacity onPress={onStarted} style={styles.button}>
        {loading ? (
          <ActivityIndicator size={"small"} color={"#fff"} />
        ) : (
          <Text style={styles.buttonText}>Continue</Text>
        )}
      </TouchableOpacity>
    </ThemedSurface2>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 16,
  },

  logoContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // marginLeft: -6,
    marginTop: 10,
  },
  image: { width: 120, height: 120, marginLeft: -6 },
  title: { fontSize: 28, fontFamily: Fonts.SemiBold },
  subtitle: { fontSize: 14, fontFamily: Fonts.Light, lineHeight: 28 },
  Codecontainer: {
    marginTop: 50,
    marginBottom: 20,
    // borderWidth: 1,
  },
  pinCodeContainer: {
    borderWidth: 1,
    // paddingHorizontal:15
  },
  focusStick: {
    backgroundColor: Colors.light.tint,
  },
  activePinCodeContainer: {
    borderWidth: 1,
  },
  pinCodeText: {
    fontSize: 24,
    color: Colors.light.Surface2,
    fontFamily: Fonts.Regular,
    marginBottom: -5,
  },
  button: {
    backgroundColor: Colors.light.tint,
    width: "100%",
    //   height:50,
    paddingVertical: 16,
    marginBottom: 25,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    textAlign: "center",
    color: "#fff",
  },
});
