import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar backgroundColor={theme.background} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
