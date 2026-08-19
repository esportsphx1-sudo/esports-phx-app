import React from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function CommunityScreen() {
  return (
    <Screen>
      <Text style={{color: theme.text, fontSize: 28, fontWeight: "900"}}>Community</Text>
      <Text style={{color: theme.muted, marginTop: 5}}>Players, teams, coaches and competitive discussion.</Text>
      <Section title="Discover" />
      <Card title="Competitive teams" subtitle="Find teams, IGLs and players" value="→" />
      <Card title="Player directory" subtitle="Profiles, roles and experience" value="→" />
      <Card title="Opponents" subtitle="Scouting dossiers and match history" value="→" />
      <Section title="Recent activity" />
      <Card title="PHX community update" subtitle="New tactical board templates are available." />
    </Screen>
  );
}
