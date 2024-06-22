import { ThemedText1 } from "@/components/ThemedText";
import { ThemedSurface2 } from "@/components/ThemedView";
import { Fonts } from "@/constants/Fonts";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const index = () => {
  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/images/verified-blue.png")}
        style={styles.image}
      />
      <View>
        <ThemedText1 style={styles.heading}>Tradematch</ThemedText1>
        <ThemedText1 style={styles.subheading}>
          Trade For Every Match
        </ThemedText1>
      </View>
    </ThemedSurface2>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts.SemiBold,
    textAlign: "center",
  },
  image: { width: 50, height: 50, marginRight: 10 },
  subheading: { fontSize: 14, fontFamily: Fonts.Light },
});
