import PrimaryButton from "@/src/components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components/native";
import Input from "./components/Input";
import {
  AnimatedImage,
  Container,
  HorizontalView,
  LogoHeading,
  LogoSubHeading,
} from "./styles";
import { router } from "expo-router";

const Name = () => {
  const themeContext = useContext(ThemeContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const onStarted = () => {
    setLoading(true);
    setTimeout(() => {
      router.push({ pathname: "/avatar" });
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <HorizontalView>
        <AnimatedImage
          source={require("@/src/assets/images/verified-blue.png")}
        />
        <View>
          <LogoHeading>TradeMatch</LogoHeading>
          <LogoSubHeading> Trade For Every Match</LogoSubHeading>
        </View>
      </HorizontalView>

      <View style={{ marginTop: 25 }}>
        <LogoHeading>Hello, Guest </LogoHeading>
        <LogoSubHeading>
          Entering your name helps us personalize your experience.
        </LogoSubHeading>
      </View>

      <Input
        loading={loading}
        value={name}
        onChange={setName}
        keyboardType="default"
        maxLength={10}
        placeholder="Full name"
        autoFocus={true}
      >
        <View style={{ padding: 20 }}>
          <Ionicons
            name="person"
            size={21}
            color={themeContext?.colors?.text + 80}
          />
        </View>
      </Input>
      <View style={{ flex: 1 }} />

      <PrimaryButton loading={loading} onPress={onStarted} text="Continue" />
    </Container>
  );
};

export default Name;
