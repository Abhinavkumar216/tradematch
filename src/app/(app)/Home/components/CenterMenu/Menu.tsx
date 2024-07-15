import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { CardContainer, CardSubHeading } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

const Menu = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <View>
      <View
        style={{
          width: "100%",
          // borderWidth: 1,
          backgroundColor: themeContext?.colors?.text+20,
          height: 1,
          position:'relative', top:40
        }}
      />
      <CardContainer>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons
            name="calendar-outline"
            size={16}
            color={themeContext?.colors?.text}
          />
          <CardSubHeading>Scheduled</CardSubHeading>
        </TouchableOpacity>
        <View
          style={[
            styles.saperator,
            { backgroundColor: themeContext?.colors?.text+20 },
          ]}
        />
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons
            name="trophy-outline"
            size={16}
            color={themeContext?.colors?.text}
          />
          <CardSubHeading>Series</CardSubHeading>
        </TouchableOpacity>
      </CardContainer>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  saperator: {
    height: 18,
    width: 1,
    marginHorizontal: 10,
  },
});
