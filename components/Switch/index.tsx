import {
  Image,
  View,
  Switch as SwitchComponent,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { getStyles } from "./styles";

interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  iconSource?: ImageSourcePropType;
}

const Switch = ({ value, onChange, iconSource }: SwitchProps) => {
  const { theme } = useTheme();

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <SwitchComponent
        value={value}
        onValueChange={onChange}
        thumbColor={value ? theme.background : theme.background}
        trackColor={{ false: theme.gray, true: theme.gray }}
      />
      {iconSource && (
        <Image source={iconSource} style={styles.icon} resizeMode="contain" />
      )}
    </View>
  );
};

export { Switch };
