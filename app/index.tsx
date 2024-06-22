import { ThemedText1, ThemedText2 } from "@/components/ThemedText";
import { ThemedSurface2 } from "@/components/ThemedView";
import { Fonts } from "@/constants/Fonts";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Size = 200;
const index = () => {
  const imageSize = useSharedValue(Size);
  const translateX = useSharedValue<number>(0);

  const handlePress = () => {
    imageSize.value = 65;
    translateX.value -= 45;
  };


  const imageAnimatedStyles = useAnimatedStyle(() => ({
    width: withTiming(imageSize.value, { duration: 1000 }),
    height: withTiming(imageSize.value, { duration: 1000 }),
    transform: [
      { translateX: withTiming(translateX.value * 2, { duration: 1000 }) },
    ],
  }));


  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 3000);
  }, []);


  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar style="auto" />
        <Animated.Image
          source={require("../assets/images/verified-blue.png")}
          style={[styles.image, imageAnimatedStyles]}
        />
        <Animated.View style={{ marginRight: -65 }}>
          <Animated.Text
            entering={FadeInDown.delay(3200).duration(1000)}
            style={[styles.heading, { color: "#fff" }]}
          >
            Tradematch
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(3200).duration(1000)}
            style={[styles.subheading, { color: "#fff" }]}
          >
            Trade For Every Match
          </Animated.Text>
        </Animated.View>
    </ThemedSurface2>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts.SemiBold,
    textAlign: "center",
    // display: "none",
  },
  image: { width: 65, height: 65, position:'absolute' },
  subheading: { fontSize: 14, fontFamily: Fonts.Light },
});
