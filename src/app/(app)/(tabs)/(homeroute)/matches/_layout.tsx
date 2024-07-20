import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MatchTopTabsLayout = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const MatchTopTabs = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <MatchTopTabsLayout
      screenOptions={{
        swipeEnabled:false,
        animationEnabled: true,
        tabBarBounces: true,
        tabBarIndicatorContainerStyle: {
          backgroundColor: themeContext?.colors?.background,
        },
        tabBarIndicatorStyle: {
          borderWidth: 2,
          borderColor: themeContext?.colors?.primary,
          backgroundColor: themeContext?.colors?.primary,
          borderRadius: 100,
        },
        tabBarLabelStyle: {
          fontSize: themeContext?.typography?.sizes?.font14,
          fontFamily: themeContext?.typography?.fontFamily?.regular,
        },
        tabBarInactiveTintColor: themeContext?.colors?.text,
        tabBarActiveTintColor: themeContext?.colors?.primary,
      }}
    >
      <MatchTopTabsLayout.Screen
        name="live"
        options={{ title: "Live" }}
      />
      <MatchTopTabsLayout.Screen
        name="upcoming/index"
        
        options={{ title: "Upcoming" }}
      />
      <MatchTopTabsLayout.Screen
        name="results/index"
        options={{ title: "Results" }}
      />
    </MatchTopTabsLayout>
  );
};

export default MatchTopTabs;
