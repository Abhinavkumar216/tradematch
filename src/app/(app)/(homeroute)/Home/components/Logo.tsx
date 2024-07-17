import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AnimatedImage,
  Container,
  HorizontalView,
  ProfileImage,
  LogoHeading,
  LogoSubHeading,
} from "../styles";

const Logo = () => {
  return (
    <HorizontalView>
      <AnimatedImage
        source={require("@/src/assets/images/verified-blue.png")}
      />
      <View>
        <LogoHeading>TradeMatch</LogoHeading>
        <LogoSubHeading>Trade For Every Match</LogoSubHeading>
      </View>
    </HorizontalView>
  );
};

export default Logo;

const styles = StyleSheet.create({});
