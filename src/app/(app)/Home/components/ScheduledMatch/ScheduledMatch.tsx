import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import ScheduleCard from "./ScheduleCard";
import { CardWrapper, HorizontalView, Menu } from "./styles";

const ScheduledMatch = () => {
  const themecontext = useContext(ThemeContext);
  return (
    <CardWrapper>
      <HorizontalView>
        <Menu>Scheduled Match</Menu>
        <Feather
          name="chevron-right"
          size={24}
          color={themecontext?.colors.text}
        />
      </HorizontalView>
      <ScheduleCard/>
      <ScheduleCard/>
      <ScheduleCard/>
    </CardWrapper>
  );
};

export default ScheduledMatch;
