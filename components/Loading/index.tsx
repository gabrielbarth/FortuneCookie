import { View, ActivityIndicator, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { getStyles } from "./styles";

interface LoadingProps {
  description?: string;
}

const Loading = ({ description }: LoadingProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.text} />
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export { Loading };
