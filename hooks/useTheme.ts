import { useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeEnum, theme as themeColors } from "@/constants/theme";

const useTheme = () => {
  const [themeName, setThemeName] = useState(ThemeEnum.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      setThemeName(ThemeEnum.dark);
    } else {
      setThemeName(ThemeEnum.light);
    }
  }, [colorScheme]);

  const handleSwitchTheme = () => {
    setThemeName((prev) =>
      prev === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  const theme = useMemo(() => themeColors[themeName], [themeName]);

  return { theme, handleSwitchTheme };
};

export { useTheme };
