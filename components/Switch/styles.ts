import { ThemeProperties } from "@/constants/theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: ThemeProperties) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      width: 25,
      height: 25,
      marginHorizontal: 10,
    },
  });

export { getStyles };
