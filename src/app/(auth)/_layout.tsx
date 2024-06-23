import { Stack } from "expo-router";

export default function AuthRoute() {
  return (
    <Stack>
      <Stack.Screen name="start/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="verify/index" options={{ headerShown: false }} />
    </Stack>
  );
}
