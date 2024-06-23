import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useMemo } from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { DarkTheme, DefaultTheme, Font, LightTheme } from "../constants/theme";
import { store } from "../redux/Store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    [Font.Bold]: require("../assets/fonts/Poppins-Bold.ttf"),
    [Font.Medium]: require("../assets/fonts/Poppins-Medium.ttf"),
    [Font.SemiBold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [Font.Regular]: require("../assets/fonts/Poppins-Regular.ttf"),
    [Font.Light]: require("../assets/fonts/Poppins-Light.ttf"),
    [Font.Thin]: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const theme = useMemo(() => {
    if (!colorScheme) return DefaultTheme;
    return colorScheme === "dark" ? DarkTheme : LightTheme;
  }, [colorScheme]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash/index" />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
