import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { ThemeProvider } from "@/context/themeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
