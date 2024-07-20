import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeRoute = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="matches/index" />
    </Stack>
  );
};

export default HomeRoute;
