import PrimaryButton from "@/src/components/PrimaryButton";
import React, { useState } from "react";
import { View } from "react-native";
import Collection from "./components/Collection";
import {
  AnimatedAvatar,
  AnimatedImage,
  Container,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
} from "./styles";
import { router } from "expo-router";

const Avatar = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/success");
      setLoading(false);
    }, 1500);
  };

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

      <View style={{ marginTop: 15 }}>
        <LogoHeading>Let's Put a Face to Your Name </LogoHeading>
        <LogoSubHeading>Upload a picture that makes you smile!</LogoSubHeading>
      </View>

      <AnimatedAvatar
        source={require("@/src/assets/images/avatars/avatar2.jpeg")}
      />

      <LogoSubHeading>Explore Our Avatar Collection</LogoSubHeading>
      <View style={{ flex: 1, marginTop: 25 }} />
      <Collection />
      <PrimaryButton loading={loading} onPress={onStarted} text="Done" />
    </Container>
  );
};

export default Avatar;
