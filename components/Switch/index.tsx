import { Image, View, Switch as SwitchComponent, Platform } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { getStyles } from "./styles";
import { Asset } from "expo-asset";

interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  iconSource?: Asset;
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
        <Image
          source={{ uri: iconSource.uri }}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export { Switch };
