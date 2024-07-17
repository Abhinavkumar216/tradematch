import React, { useContext, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { ThemeContext } from "styled-components/native";
import { CardSubHeading, Price, PriceWrap } from "./styles";

const StockPrice = () => {
  const [isBullish, setIsBullish] = useState(true);
  const themeContext = useContext(ThemeContext);
  return (
    <View style={{ alignItems: "flex-end" }}>
      <PriceWrap>
        <Price $isBullish={isBullish}>126.35</Price>
        <Feather
          name={isBullish ? "arrow-up-right" : "arrow-down-right"}
          size={16}
          color={
            isBullish
              ? themeContext?.colors?.success
              : themeContext?.colors?.danger
          }
        />
      </PriceWrap>
      <CardSubHeading>+12.65 (2.25%)</CardSubHeading>
    </View>
  );
};

export default StockPrice;
