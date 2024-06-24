import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatedImage,
  Container,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
} from "./styles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
} from "react-native-reanimated";
import Constants from "expo-constants";
import { ResizeMode, Video } from "expo-av";
import PrimaryButton from "@/src/components/PrimaryButton";
const { height, width } = Dimensions.get("window");
const topMargin = Constants.statusBarHeight + 20;

const VIDEO_SOURCE =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Tutorial = () => {
  const translateY = useSharedValue<number>(height / 2);

  const handlePress = () => {
    translateY.value = topMargin;
  };

  const imageAnimatedStyles = useAnimatedStyle(() => ({
    top: withTiming(translateY.value, { duration: 1000 }),
  }));

  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 1000);
  }, []);

  return (
    <Container>
      <HorizontalView style={imageAnimatedStyles}>
        <AnimatedImage
          source={require("@/src/assets/images/verified-blue.png")}
        />
        <View>
          <LogoHeading>TradeMatch</LogoHeading>
          <LogoSubHeading> Trade For Every Match</LogoSubHeading>
        </View>
      </HorizontalView>
      <Animated.View
        entering={FadeIn.delay(2000).duration(1000)}
        style={{ position: "absolute", top: height / 5 }}
      >
        <LogoHeading>Master the Game & Score Big Rewards</LogoHeading>
        <Video
          resizeMode={ResizeMode.CONTAIN}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: VIDEO_SOURCE }}
          style={styles.video}
        />
      </Animated.View>
      <View style={{ flex: 1 }} />
      <PrimaryButton loading={false} text="Let's Start" onPress={() => {}} />
    </Container>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  video: {
    width: width - 32,
    aspectRatio: 16 / 9,
    marginVertical: 25,
    borderRadius: 12,
  },
});
