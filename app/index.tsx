import React, { useRef, useState } from "react";
import { generateLuckyMessage } from "@/services/ai/generator";
import { useTheme } from "@/hooks/useTheme";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import { getStyles } from "./styles";

export default function Home() {
  const [isCookieBroken, setIsCookieBroken] = useState(false);
  const [cookieMessage, setCookieMessage] = useState("");

  const { theme } = useTheme();

  const leftCookieAnim = useRef(new Animated.Value(0)).current;
  const rightCookieAnim = useRef(new Animated.Value(0)).current;
  const paperOpacity = useRef(new Animated.Value(0)).current;
  const paperSlide = useRef(new Animated.Value(-20)).current;

  const handlePress = async () => {
    if (!isCookieBroken) {
      const message = await generateLuckyMessage();
      setCookieMessage(message);

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
    setCookieMessage("");
    leftCookieAnim.setValue(0);
    rightCookieAnim.setValue(0);
    paperOpacity.setValue(0);
    paperSlide.setValue(-20);
  };

  const styles = getStyles(theme);

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
        <Text style={styles.message}>{cookieMessage}</Text>
      </Animated.View>

      {isCookieBroken && (
        <TouchableOpacity onPress={reset} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
