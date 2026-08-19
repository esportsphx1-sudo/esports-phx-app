import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { theme } from "../theme";

export default function Card({ title, subtitle, value, onPress }: {
  title: string; subtitle?: string; value?: string; onPress?: () => void;
}) {
  const body = (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {value ? <Text style={styles.value}>{value}</Text> : null}
    </View>
  );
  return onPress ? <TouchableOpacity activeOpacity={0.8} onPress={onPress}>{body}</TouchableOpacity> : body;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  title: { color: theme.text, fontSize: 15, fontWeight: "800" },
  subtitle: { color: theme.muted, marginTop: 5, fontSize: 12 },
  value: { color: theme.accent, fontSize: 17, fontWeight: "900", marginLeft: 10 }
});
