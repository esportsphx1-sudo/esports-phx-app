import React from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function PlaybookScreen() {
  return (
    <Screen>
      <Text style={{color: theme.text, fontSize: 28, fontWeight: "900"}}>Playbook</Text>
      <Text style={{color: theme.muted, marginTop: 5}}>Map-linked tactical boards and team plans.</Text>
      <Section title="Boards" right="NEW BOARD" />
      <Card title="Bermuda — Peak Rotation" subtitle="4-player rotation • Updated today" value="OPEN" />
      <Card title="NexTerra — Farm Hold" subtitle="Defensive setup • 6 markers" value="OPEN" />
      <Card title="Purgatory — Moathouse" subtitle="Zone plan • IGL notes" value="OPEN" />
      <Section title="Tactical tools" />
      <Card title="Drop planner" subtitle="Choose landing zones and loot path" value="→" />
      <Card title="Scouting dossier" subtitle="Track opponents and tendencies" value="→" />
    </Screen>
  );
}
