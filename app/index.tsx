import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

export default function Home() {
  const [isCookieBroken, setIsCookieBroken] = useState(false);
  const [fortune, setFortune] = useState("");

  const leftCookieAnim = useRef(new Animated.Value(0)).current;
  const rightCookieAnim = useRef(new Animated.Value(0)).current;
  const paperOpacity = useRef(new Animated.Value(0)).current;
  const paperSlide = useRef(new Animated.Value(-20)).current;

  const fortunes = [
    "A sorte está a seu favor hoje!",
    "Grandes oportunidades estão vindo.",
    "Seja paciente, as coisas boas chegam com o tempo.",
    "Alguém especial pensa em você agora.",
    "Você está prestes a alcançar algo incrível!",
  ];

  const handlePress = () => {
    if (!isCookieBroken) {
      const randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);

      Animated.parallel([
        Animated.timing(leftCookieAnim, {
          toValue: -120,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rightCookieAnim, {
          toValue: 120,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(paperOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(paperSlide, {
          toValue: 20,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsCookieBroken(true);
      });
    }
  };

  const reset = () => {
    setIsCookieBroken(false);
    setFortune("");
    leftCookieAnim.setValue(0);
    rightCookieAnim.setValue(0);
    paperOpacity.setValue(0);
    paperSlide.setValue(-20);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} disabled={isCookieBroken}>
        <View style={styles.cookieContainer}>
          <Animated.Image
            source={require("../assets/images/fortune-cookie-left.png")}
            style={[
              styles.image,
              { transform: [{ translateX: leftCookieAnim }] },
            ]}
          />
          <Animated.Image
            source={require("../assets/images/fortune-cookie-right.png")}
            style={[
              styles.image,
              { transform: [{ translateX: rightCookieAnim }] },
            ]}
          />
        </View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.paper,
          {
            opacity: paperOpacity,
            transform: [{ translateY: paperSlide }],
          },
        ]}
      >
        <Text style={styles.message}>{fortune}</Text>
      </Animated.View>

      {isCookieBroken && (
        <TouchableOpacity onPress={reset} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
  },
  resetButton: {
    position: "absolute",
    bottom: "10%",
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
