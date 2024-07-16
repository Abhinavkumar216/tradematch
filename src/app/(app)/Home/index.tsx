import React from "react";
import { StyleSheet } from "react-native";
import Logo from "./components/Logo";
import { Container, HorizontalView, ProfileImage } from "./styles";
import Card from "./components/TopCard/TopCard";
import TopCard from "./components/WarningCard/WarningCard";
import Menu from "./components/CenterMenu/CenterMenu";
import ScheduledMatch from "./components/ScheduledMatch/ScheduledMatch";

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
      {/* Stocks Movements */}
      {/* Scheduled Matches */}
      <ScheduledMatch/>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
