import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {
  CardContainer,
  CardHeading,
  CardHeadingAlt,
  CardHeadingSuccess,
  CardSubHeading,
  CountryImage,
  HorizontalView,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

const Card = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <CardContainer>
      <HorizontalView>
        <View>
          <CardHeading>Bangladesh Tour of India</CardHeading>
          <CardSubHeading>1st ODI, at Hyderabad</CardSubHeading>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.amountWrap}>
            <CardHeadingSuccess>25635.00</CardHeadingSuccess>
            <Feather
              name="arrow-up-right"
              size={15}
              color={themeContext?.colors?.success}
            />
          </View>
          <CardSubHeading>+25.69 (6.33%)</CardSubHeading>
        </View>
      </HorizontalView>
      <View style={styles.spacer} />
      <HorizontalView >
        <View style={styles.imageWrap}>
          <CountryImage
            source={require("@/src/assets/images/flags/bang.png")}
          />
          <CardHeading>Bangladesh</CardHeading>
        </View>
        <CardHeading>352/9</CardHeading>
      </HorizontalView>
      <View style={styles.spaceralt} />
      <HorizontalView >
        <View style={styles.imageWrap}>
          <CountryImage
            source={require("@/src/assets/images/flags/india.png")}
          />
          <CardHeading>India</CardHeading>
        </View>
        <CardHeading>
          243/2 <CardSubHeading>(32.5/50 OV)</CardSubHeading>
        </CardHeading>
      </HorizontalView>
      <View style={styles.spacer} />
      <CardHeadingAlt>India needs 110 runs in 40 balls</CardHeadingAlt>
    </CardContainer>
  );
};

export default Card;

const styles = StyleSheet.create({
  amountWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  imageWrap: { flexDirection: "row", alignItems: "center",},
  spacer: { paddingVertical: 8 },
  spaceralt: { paddingVertical: 4 },
});
