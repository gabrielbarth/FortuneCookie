import { ThemeProperties } from "@/constants/theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: ThemeProperties) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 50,
      marginVertical: 10,
    },
    flag: {
      width: 25,
      height: 25,
      marginHorizontal: 10,
    },
    cookieContainer: {
      flexDirection: "row",
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 200,
      height: 150,
      margin: 0,
      padding: 0,
      position: "absolute",
    },
    cookie: {
      width: 100,
      height: 100,
    },
    paper: {
      position: "absolute",
      backgroundColor: theme.background,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.gray,
      elevation: 2,
    },
    message: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.text,
    },
    resetButton: {
      position: "absolute",
      bottom: "10%",
      padding: 10,
      backgroundColor: theme.primary,
      borderRadius: 5,
    },
    resetButtonText: {
      color: theme.text,
      fontWeight: "bold",
    },
  });

export { getStyles };
