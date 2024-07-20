import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "./components/Logo";
import { Container, HorizontalView, ProfileImage } from "./styles";
import Card from "./components/TopCard/TopCard";
import TopCard from "./components/WarningCard/WarningCard";
import Menu from "./components/CenterMenu/CenterMenu";
import ScheduledMatch from "./components/ScheduledMatch/ScheduledMatch";
import TopStocks from "./components/TopStocks/TopStocks";
import TopGainers from "./components/TopStocks/TopGainers";
import { Stack } from "expo-router";
import { ThemeContext } from "styled-components/native";
import TabView from "./components/TopStocks/TabView";

const Home = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <Container>
      <Stack.Screen
        options={{
          statusBarColor: themeContext?.colors?.background,
          // statusBarStyle:'auto',
          headerShown: true,
          headerTitle:"",
          headerShadowVisible:false,
          headerStyle:{
            backgroundColor:themeContext?.colors?.background,
          },
          headerLeft() {
            return <Logo />;
          },
          headerRight() {
            return (
              <ProfileImage
                source={require("@/src/assets/images/avatars/avatar2.jpeg")}
              />
            );
          },
        }}
      />
      {/* Warning card */}
      {/* <TopCard/> */}
      {/* Matches */}
      <Card />
      {/* CenterMenu */}
      <Menu />
      {/* Stocks Movements */}
      <TabView/>
      {/* Scheduled Matches */}
      <ScheduledMatch />
      <View style={{ height: 100 }} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
