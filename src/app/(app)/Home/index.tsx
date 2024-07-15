import React from "react";
import { StyleSheet } from "react-native";
import Logo from "./components/Logo";
import { Container, HorizontalView, ProfileImage } from "./styles";
import Card from "./components/TopCard/Card";
import TopCard from "./components/WarningCard/TopCard";
import Menu from "./components/CenterMenu/Menu";

const Home = () => {
  return (
    <Container>
      <HorizontalView>
        <Logo />
        <ProfileImage
          source={require("@/src/assets/images/avatars/avatar2.jpeg")}
        />
      </HorizontalView>
      {/* Warning card */}
      {/* <TopCard/> */}
      {/* Matches */}
      <Card />
      {/* CenterMenu */}
      <Menu />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
