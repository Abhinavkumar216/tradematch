import { Stack } from "expo-router";

export default function AuthRoute() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="start/index" />
      <Stack.Screen name="login/index" />
      <Stack.Screen name="verify/index" />
      <Stack.Screen name="name/index" />
      <Stack.Screen name="avatar/index" />
    </Stack>
  );
}
