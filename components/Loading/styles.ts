import { ThemeProperties } from "@/constants/theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: ThemeProperties) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      marginTop: 20,
      color: theme.text,
      fontWeight: "bold",
    },
  });

export { getStyles };
