import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChipContainer, Heading } from "./styles";

interface ChipProps {
  name: string;
  selected?: boolean;
}
const Chip = ({ name, selected }: ChipProps) => {
  return (
    <ChipContainer $selected={selected}>
      <Heading $selected={selected}>{name}</Heading>
    </ChipContainer>
  );
};

export default Chip;

const styles = StyleSheet.create({});
