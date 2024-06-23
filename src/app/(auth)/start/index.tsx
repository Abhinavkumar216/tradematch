import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Container } from "../../splash/styles";
import {
  AnimatedImage,
  ButtonText,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
  StyledButton,
} from "./styles";
import Animated, {
  Easing,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";


const Start = () => {
  const [loading, setLoading] = useState<boolean>(false);
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
      //   router.push("/signin");
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <View style={{ flex: 1 }} />
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
        entering={FadeInDown.delay(2000)
          .duration(1000)
          .easing(Easing.elastic(0.5))}
      >
        <LogoHeading>Welcome to TradeMatch!</LogoHeading>
        <LogoSubHeading>Start you Journey in 2 Simple Steps</LogoSubHeading>
      </Animated.View>
      <View style={{ flex: 1 }} />
      <StyledButton entering={FadeInDown.delay(2500).duration(1000)}>
        {loading ? (
          <ActivityIndicator size={"small"} color={"#fff"} />
        ) : (
          <ButtonText>Get Started</ButtonText>
        )}
      </StyledButton>
    </Container>
  );
};

export default Start;

// const Start = () => {

//     return (
//       <ThemedSurface2 style={styles.container}>
//         <StatusBar style="auto" />
//         <View style={{ flex: 1 }} />
//         <Animated.View
//           style={[
//             { flexDirection: "row", position: "absolute" },
//             imageAnimatedStyles,
//           ]}
//         >
//           <Image
//             source={require("../assets/images/verified-blue.png")}
//             style={[styles.image]}
//           />
//           <View>
//             <ThemedText2 style={[styles.logoheading]}>Tradematch</ThemedText2>
//             <ThemedText2 style={[styles.logosubheading]}>
//               Trade For Every Match
//             </ThemedText2>
//           </View>
//         </Animated.View>

//         <Animated.View
//           entering={FadeInDown.delay(2000)
//             .duration(1000)
//             .easing(Easing.elastic(0.5))}
//         >
//           <ThemedText2 style={styles.logoheading}>
//             Welcome to TradeMatch!
//           </ThemedText2>
//           <ThemedText2 style={styles.logosubheading}>
//             Start you Journey in 2 Simple Stepls
//           </ThemedText2>
//         </Animated.View>

//         <View style={{ flex: 1 }} />
//         <AnimatedButton
//           entering={FadeInDown.delay(2500).duration(1000)}
//           onPress={onStarted}
//           style={styles.button}
//         >
//           {loading ? (
//             <ActivityIndicator size={"small"} color={"#fff"} />
//           ) : (
//             <Text style={styles.buttonText}>Get Started</Text>
//           )}
//         </AnimatedButton>
//       </ThemedSurface2>
//     );
//   };

//   export default Start;
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       // flexDirection: "row",
//     },
//     logoheading: {
//       fontSize: 24,
//       fontFamily: Fonts.SemiBold,
//       textAlign: "center",
//       // display: "none",
//     },
//     image: { width: 65, height: 65 },
//     logosubheading: {
//       fontSize: 14,
//       fontFamily: Fonts.Light,
//       textAlign: "center",
//     },
//     button: {
//       backgroundColor: Colors.light.tint,
//       width: "90%",
//       //   height:50,
//       paddingVertical: 16,
//       marginBottom: 25,
//       borderRadius: 14,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     buttonText: {
//       fontSize: 16,
//       fontFamily: Fonts.Medium,
//       textAlign: "center",
//       color: "#fff",
//     },
//   });
