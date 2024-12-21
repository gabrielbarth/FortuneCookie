import React, { createContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import {
  ThemeEnum,
  ThemeProperties,
  theme as themeColors,
} from "@/constants/theme";

interface ThemeContextType {
  theme: ThemeProperties;
  themeName: ThemeEnum;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState(ThemeEnum.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      setThemeName(ThemeEnum.dark);
    } else {
      setThemeName(ThemeEnum.light);
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    setThemeName((prev) =>
      prev === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  const theme = useMemo(() => themeColors[themeName], [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
