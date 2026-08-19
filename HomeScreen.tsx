import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>WELCOME BACK</Text>
          <Text style={styles.brand}>PHX ESPORTS</Text>
          <Text style={styles.sub}>Competitive training & match intelligence</Text>
        </View>
        <View style={styles.logo}><Text style={styles.logoText}>PHX</Text></View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroKicker}>TEAM DASHBOARD</Text>
        <Text style={styles.heroTitle}>Build. Practice. Dominate.</Text>
        <Text style={styles.heroText}>Track sessions, review matches and keep your squad ready.</Text>
      </View>

      <Section title="Performance" />
      <View style={styles.grid}>
        <Card title="Sessions" subtitle="Last 30 days" value="18" />
        <Card title="Win Rate" subtitle="Competitive" value="72%" />
        <Card title="Avg Kills" subtitle="Per match" value="8.4" />
        <Card title="Consistency" subtitle="Current streak" value="A+" />
      </View>

      <Section title="Quick access" />
      <Card title="Continue Practice" subtitle="Movement & aim drills" value="→" />
      <Card title="Next Match" subtitle="Open match intelligence" value="→" />
      <Card title="Team Playbook" subtitle="Review tactical boards" value="→" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
  kicker: { color: theme.accent, fontSize: 10, fontWeight: "900", letterSpacing: 1.4 },
  brand: { color: theme.text, fontSize: 26, fontWeight: "900", marginTop: 3 },
  sub: { color: theme.muted, fontSize: 12, marginTop: 4 },
  logo: { width: 58, height: 58, borderRadius: 18, borderWidth: 1, borderColor: theme.accent, backgroundColor: "#09121A", alignItems: "center", justifyContent: "center" },
  logoText: { color: theme.accent, fontWeight: "900", fontSize: 18 },
  hero: { backgroundColor: theme.card2, borderColor: theme.border, borderWidth: 1, borderRadius: 18, padding: 18 },
  heroKicker: { color: theme.green, fontSize: 10, fontWeight: "900", letterSpacing: 1.2 },
  heroTitle: { color: theme.text, fontSize: 24, fontWeight: "900", marginTop: 8 },
  heroText: { color: theme.muted, fontSize: 13, lineHeight: 19, marginTop: 8 },
  grid: { gap: 8 }
});
