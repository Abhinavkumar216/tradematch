import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import {
  CardContainer,
  CardSubHeading,
  HorizontalLine,
  MenuContainer,
  MenuWraper,
  Saperator,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { Link } from "expo-router";

const Menu = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <View>
      <HorizontalLine />
      <MenuContainer>
        <Link href={'matches'} asChild>
        <MenuWraper>
          <Ionicons
            name="calendar-outline"
            size={16}
            color={themeContext?.colors?.text}
          />
          <CardSubHeading>Scheduled</CardSubHeading>
        </MenuWraper>
        </Link>
        <Saperator/>
        <MenuWraper>
          <Ionicons
            name="trophy-outline"
            size={16}
            color={themeContext?.colors?.text}
          />
          <CardSubHeading>Series</CardSubHeading>
        </MenuWraper>
      </MenuContainer>
    </View>
  );
};

export default Menu;