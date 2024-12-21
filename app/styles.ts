import { ThemeProperties } from "@/constants/theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: ThemeProperties) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      backgroundColor: theme.background,
    },
    switchContainer: {
      width: "100%",
      marginTop: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    cookieContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 200,
      height: 150,
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
    retryButton: {
      padding: 15,
      backgroundColor: theme.gray,
      borderRadius: 5,
    },
    footerContainer: {
      position: "absolute",
      bottom: "10%",
    },
    resetButtonText: {
      color: theme.text,
      fontWeight: "bold",
    },
  });

export { getStyles };
