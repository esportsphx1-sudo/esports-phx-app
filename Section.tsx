import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../theme";

export default function Section({ title, right }: { title: string; right?: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {right ? <Text style={styles.right}>{right}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 22, marginBottom: 10 },
  title: { color: theme.text, fontSize: 18, fontWeight: "900" },
  right: { color: theme.accent, fontSize: 12, fontWeight: "800" }
});
