import React from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function MatchesScreen() {
  return (
    <Screen>
      <Text style={{color: theme.text, fontSize: 28, fontWeight: "900"}}>Matches</Text>
      <Text style={{color: theme.muted, marginTop: 5}}>Match intelligence, lobbies and reviews.</Text>
      <Section title="Upcoming" right="VIEW ALL" />
      <Card title="PHX Scrim #01" subtitle="Today • 8:00 PM • Bermuda" value="LIVE SOON" />
      <Card title="Weekly Cup Qualifier" subtitle="Tomorrow • 7:30 PM" value="UPCOMING" />
      <Section title="Recent results" />
      <Card title="Practice Lobby" subtitle="12 kills • Top 3" value="+18" />
      <Card title="Ranked Session" subtitle="9 kills • Booyah" value="+27" />
    </Screen>
  );
}
