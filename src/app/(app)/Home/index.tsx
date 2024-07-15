import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./components/Card";
import {
  AnimatedImage,
  Container,
  HorizontalView,
  ProfileImage,
  LogoHeading,
  LogoSubHeading,
} from "./styles";
import Logo from "./components/Logo";

const Home = () => {
  return (
    <Container>
      <HorizontalView>
        <Logo />
        <ProfileImage
          source={require("@/src/assets/images/avatars/avatar2.jpeg")}
        />
      </HorizontalView>
      {/* Matches */}
      <Card />
      {/* Matches */}

    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
