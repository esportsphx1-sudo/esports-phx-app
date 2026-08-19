import React from "react";
import { Text, View } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function DetailScreen() {
  return (
    <Screen>
      <View style={{backgroundColor: theme.card2, borderWidth: 1, borderColor: theme.border, borderRadius: 18, padding: 18}}>
        <Text style={{color: theme.accent, fontSize: 10, fontWeight: "900", letterSpacing: 1.3}}>MATCH INTELLIGENCE</Text>
        <Text style={{color: theme.text, fontSize: 24, fontWeight: "900", marginTop: 8}}>PHX ESPORTS vs Opponent</Text>
        <Text style={{color: theme.muted, marginTop: 6}}>Bermuda • Squad • 12 players</Text>
      </View>
      <Section title="Match summary" />
      <Card title="Placement" value="#2" />
      <Card title="Eliminations" value="11" />
      <Card title="Match score" value="87" />
      <Section title="Review" />
      <Card title="Open POV review" subtitle="Link clips and notes to the match." value="→" />
      <Card title="Add coach notes" subtitle="Record decisions, mistakes and improvements." value="→" />
    </Screen>
  );
}
