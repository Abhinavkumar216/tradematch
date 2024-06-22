import { ThemedText2 } from "@/src/components/ThemedText";
import { ThemedSurface2 } from "@/src/components/ThemedView";
import { Fonts } from "@/src/constants/Fonts";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Size = 200;
const Splash = () => {
  const imageSize = useSharedValue<number>(Size);
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
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.navigate("/start");
    }, 3000);
  }, []);

  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar style="auto" />
      <Animated.Image
        source={require("../assets/images/verified-blue.png")}
        style={[styles.image, imageAnimatedStyles]}
      />
      <Animated.View
        entering={FadeInDown.delay(1200).duration(1000)}
        style={{ marginRight: -45 }}
      >
        <ThemedText2 style={[styles.heading]}>Tradematch</ThemedText2>
        <ThemedText2 style={[styles.subheading]}>
          Trade For Every Match
        </ThemedText2>
      </Animated.View>
    </ThemedSurface2>
  );
};

export default Splash;

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
  image: { width: 65, height: 65, position: "absolute" },
  subheading: { fontSize: 14, fontFamily: Fonts.Light },
});
