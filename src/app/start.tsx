import { ThemedText2 } from "@/src/components/ThemedText";
import { ThemedSurface2 } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import { Fonts } from "@/src/constants/Fonts";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import Animated, {
    Easing,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const Start = () => {
  const [loading, setLoading] = useState(false);
  const translateY = useSharedValue<number>(0);

  const handlePress = () => {
    translateY.value -= 75;
  };

  const imageAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(translateY.value * 2, { duration: 1000 }) },
    ],
  }));

  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 1000);
  }, []);

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }} />
      <Animated.View
        style={[
          { flexDirection: "row", position: "absolute" },
          imageAnimatedStyles,
        ]}
      >
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
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(2000).duration(1000).easing(Easing.elastic(0.5))}>
        <ThemedText2 style={styles.logoheading}>
          Welcome to TradeMatch!
        </ThemedText2>
        <ThemedText2 style={styles.logosubheading}>
          Start you Journey in 2 Simple Stepls
        </ThemedText2>
      </Animated.View>
      <View style={{ flex: 1 }} />
      <AnimatedButton
        entering={FadeInDown.delay(2500).duration(1000)}
        onPress={onStarted}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"#fff"} />
        ) : (
          <Text style={styles.buttonText}>Get Started</Text>
        )}
      </AnimatedButton>
    </ThemedSurface2>
  );
};

export default Start;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
  },
  logoheading: {
    fontSize: 24,
    fontFamily: Fonts.SemiBold,
    textAlign: "center",
    // display: "none",
  },
  image: { width: 65, height: 65 },
  logosubheading: {
    fontSize: 14,
    fontFamily: Fonts.Light,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.light.tint,
    width: "90%",
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
