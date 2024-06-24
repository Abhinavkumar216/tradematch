import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Container, SubHeading } from "./styles";

const Success = () => {
  const OnAnimationFinished = () => {
    router.push("/tutorial");
  };

  return (
    <Container>
      <LottieView
        loop={false}
        speed={0.4}
        onAnimationFinish={OnAnimationFinished}
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@/src/assets/lottie/blueTick.json")}
      />
      <SubHeading>Your Profile is Created!!!</SubHeading>
    </Container>
  );
};

export default Success;
