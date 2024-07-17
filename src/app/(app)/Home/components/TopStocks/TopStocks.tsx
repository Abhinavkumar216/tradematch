import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CardContainer,
  CardHeading,
  CardSubHeading,
  HorizontalView,
  PlayerImage,
} from "./styles";
import StockPrice from "./StockPrice";

const TopStocks = () => {
  return (
    <CardContainer>
      <HorizontalView>
        <PlayerImage source={require("@/src/assets/images/flags/bang.png")} />
        <View>
          <CardHeading>Rohit Sharma</CardHeading>
          <CardSubHeading>India</CardSubHeading>
        </View>
      </HorizontalView>
      <StockPrice />
    </CardContainer>
  );
};

export default TopStocks;
