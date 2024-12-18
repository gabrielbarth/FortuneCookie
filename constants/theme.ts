export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export type ThemeProperties = {
  background: string;
  text: string;
  primary: string;
  green: string;
  red: string;
  tint: string;
  gray: string;
};

export type Theme = {
  [key in ThemeEnum]: ThemeProperties;
};

const theme: Theme = {
  [ThemeEnum.light]: {
    background: "#ECEDEE",
    text: "#212121",
    primary: "#ECEDEE",
    green: "#4CAF50",
    red: "#f44336",
    tint: "#0a7ea4",
    gray: "#9BA1A6",
  },
  [ThemeEnum.dark]: {
    background: "#212121",
    text: "#ECEDEE",
    primary: "#212121",
    green: "#69C96C",
    red: "#F5756C",
    tint: "#81b0ff",
    gray: "#5A6166",
  },
};

export { theme };
