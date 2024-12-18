import {
  Image,
  View,
  Switch as SwitchComponent,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { getStyles } from "./styles";
import { useMemo } from "react";

interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  iconSource?: ImageSourcePropType;
}

const Switch = ({ value, onChange, iconSource }: SwitchProps) => {
  const { theme } = useTheme();

  const isAndroid = Platform.OS === "android";
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <SwitchComponent
        value={value}
        onValueChange={onChange}
        thumbColor={isAndroid ? theme.text : theme.background}
        trackColor={{ false: theme.gray, true: theme.gray }}
      />
      {iconSource && (
        <Image source={iconSource} style={styles.icon} resizeMode="contain" />
      )}
    </View>
  );
};

export { Switch };
