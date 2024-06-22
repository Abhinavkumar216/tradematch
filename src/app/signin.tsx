import { ThemedText1, ThemedText2 } from "@/src/components/ThemedText";
import { ThemedSurface2 } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import { Fonts } from "@/src/constants/Fonts";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/features/theme/themeSlice";

const statusBarHeight = Constants.statusBarHeight;

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const Signin = () => {
  const buttonOpacity = useSharedValue(1);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);
  const theme = useSelector(selectTheme);

  const [loading, setLoading] = useState(false);
  const [isReferActive, setIsReferActive] = useState(false);

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      // router.push("/signin");
      setLoading(false);
    }, 1500);
  };

  const handlePress = () => {
    opacity.value = 1;
    translateY.value = -20;
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

  const theming = theme ? Colors.dark.white600 : Colors.light.dark;
  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar animated style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/verified-blue.png")}
          style={[styles.image]}
        />
        <View>
          <ThemedText2 style={[styles.logoheading]}>Tradematch</ThemedText2>
          <ThemedText2 style={[styles.logosubheading]}>
            Trade For Every Match
          </ThemedText2>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <ThemedText2 style={styles.title}>Let's Begin</ThemedText2>
        <ThemedText1 style={styles.subtitle}>
          Tell us your mobile number to recieve a one-time password (OTP) for
          Verification.
        </ThemedText1>
      </View>

      <ThemedSurface2
        style={[
          styles.inputSurface,
          { borderColor: theme ? Colors.dark.Surface1 : Colors.light.white600 },
        ]}
      >
        <View style={{ padding: 18 }}>
          <ThemedText2 style={styles.countryCode}>+91</ThemedText2>
        </View>
        <TextInput
          style={[
            styles.inputStyle,
            {
              color: theming,
            },
          ]}
          placeholderTextColor={theming}
          placeholder="Mobile Number"
          dataDetectorTypes={"phoneNumber"}
          keyboardType="phone-pad"
          cursorColor={theming}
          maxLength={10}
          autoFocus
        />
      </ThemedSurface2>

      <AnimatedButton
        style={[{ marginTop: 10, flexDirection: "row" }, buttonAnimatedStyles]}
        onPress={handlePress}
      >
        <Ionicons name="chevron-forward" size={20} color={theming} />
        <ThemedText1
          style={{ marginLeft: 5, fontFamily: Fonts.Light, fontSize: 14 }}
        >
          Have a Referral Code?
        </ThemedText1>
      </AnimatedButton>

      <ThemedSurface2
        style={[
          styles.inputSurface,
          {
            borderColor: theme ? Colors.dark.Surface1 : Colors.light.white600,
            marginTop: 20,
          },
          imageAnimatedStyles,
        ]}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Ionicons name="person" size={21} color={theming} />
        </View>
        <TextInput
          style={[
            styles.inputStyle,
            {
              color: theming,
            },
          ]}
          placeholderTextColor={theming}
          placeholder="Refer code"
          dataDetectorTypes={"phoneNumber"}
          keyboardType="phone-pad"
          cursorColor={theming}
          maxLength={10}
          editable={isReferActive}
        />
      </ThemedSurface2>

      <View style={{ flex: 1 }} />
      <ThemedText1 style={[styles.subtitle,{fontSize:12, marginBottom:10}]}>
        By Proceeding, I agree to the T&C and Privacy Policy.
      </ThemedText1>
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

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 16,
    // backgroundColor:'#fff'
    // justifyContent: "center",
    // alignItems: "center",
  },
  logoheading: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    // textAlign: "center",
    // display: "none",
  },
  image: { width: 40, height: 40, marginRight: 5 },
  logosubheading: {
    fontSize: 10,
    fontFamily: Fonts.Light,
    textAlign: "center",
  },
  inputStyle: {
    // borderWidth: 1,
    flex: 1,
    paddingVertical: 16,
    fontFamily: Fonts.Regular,
    paddingLeft: 12,
    fontSize: 16,
    marginBottom: -3,
  },
  inputSurface: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 12,
    // borderColor: "#2F2F46",
    //   backgroundColor:'#222232'
    //   height: 50,
  },
  countryCode: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    marginBottom: -3,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -6,
    marginTop: 10,
  },
  title: { fontSize: 28, fontFamily: Fonts.SemiBold },
  subtitle: { fontSize: 14, fontFamily: Fonts.Light, lineHeight: 24 },
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
