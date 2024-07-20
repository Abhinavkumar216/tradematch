// import Colors from '@/constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

const TabsLayout = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: themeContext?.colors?.secbackground,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: themeContext?.colors.primary,
          tabBarInactiveBackgroundColor: themeContext?.colors?.secbackground,
          tabBarActiveBackgroundColor: themeContext?.colors?.secbackground,
        }}
        initialRouteName="(homeroute)"
      >
        <Tabs.Screen
          name="(homeroute)"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(fundsroute)"
          options={{
            title: "Settings",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};
export default TabsLayout;
