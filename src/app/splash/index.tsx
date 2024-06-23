import React, { useEffect } from "react";
import {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  AnimatedImage,
  Container,
  Heading,
  HorizontalView,
  SubHeading,
} from "./styles";
import { router } from "expo-router";

const Splash = () => {
  const imageSize = useSharedValue<number>(200);
  const translateX = useSharedValue<number>(0);

  const imageAnimatedStyles = useAnimatedStyle(() => ({
    width: withTiming(imageSize.value, { duration: 1000 }),
    height: withTiming(imageSize.value, { duration: 1000 }),
    transform: [
      { translateX: withTiming(translateX.value * 2, { duration: 1000 }) },
    ],
  }));

  const handlePress = () => {
    imageSize.value = 65;
    translateX.value -= 45;
  };

  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.push("/start");
    }, 3000);
  }, []);

  return (
    <Container>
      <AnimatedImage
        source={require("@/src/assets/images/verified-blue.png")}
        style={imageAnimatedStyles}
      />
      <HorizontalView entering={FadeInDown.delay(1200).duration(1000)}>
        <Heading>Tradematch</Heading>
        <SubHeading>Trade For Every Match</SubHeading>
      </HorizontalView>
    </Container>
  );
};

export default Splash;
