import { Stack } from "expo-router";

export default function PerfilLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="perfil" />
      <Stack.Screen name="(guardadas)" />
    </Stack>
  );
}
