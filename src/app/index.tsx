import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Splash from "./splash";
import Start from "./(auth)/start";
import Login from "./(auth)/login";
import Verify from "./(auth)/verify";
import Name from "./(auth)/name";
import Avatar from "./(auth)/avatar";
import Success from "./(auth)/success";
import Home from "./(app)/(homeroute)/Home";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!!isLoggedIn) {
    return <Home />;
  } else {
    return <Splash />;
  }
};

export default Index;

const styles = StyleSheet.create({});
