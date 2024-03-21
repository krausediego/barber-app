import { Stack } from "expo-router";
import { vars } from "nativewind";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Esqueci a senha",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
