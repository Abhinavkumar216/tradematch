import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components";
import {
  BottomWarper,
  CardContainer,
  CardHeading,
  CountryImage,
  CountryName,
  CouuntryWrap,
  HorizontalView,
  TimingHeading,
  TimingValue,
} from "./styles";

const ScheduleCard = () => {
  const themecontext = useContext(ThemeContext);
  return (
    <CardContainer>
      <HorizontalView>
        <CardHeading>1st ODI, at Hyderabad</CardHeading>
        <Feather name="bell" size={21} color={themecontext?.colors.text} />
      </HorizontalView>
      <BottomWarper>
        <View>
          <CouuntryWrap>
            <CountryImage
              source={require("@/src/assets/images/flags/bang.png")}
            />
            <CountryName>Bangladesh</CountryName>
          </CouuntryWrap>
          <CouuntryWrap>
            <CountryImage
              source={require("@/src/assets/images/flags/india.png")}
            />
            <CountryName>India</CountryName>
          </CouuntryWrap>
        </View>
        <Timing />
      </BottomWarper>
    </CardContainer>
  );
};

export default ScheduleCard;

const Timing = () => {
  return (
    <View>
      <TimingHeading>Starting at</TimingHeading>
      <TimingValue>09 : 30 : 45</TimingValue>
    </View>
  );
};
