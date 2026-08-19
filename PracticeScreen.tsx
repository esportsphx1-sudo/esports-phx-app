import React from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function PracticeScreen() {
  return (
    <Screen>
      <Text style={{color: theme.text, fontSize: 28, fontWeight: "900"}}>Practice</Text>
      <Text style={{color: theme.muted, marginTop: 5}}>Create sessions and track your progress.</Text>
      <Section title="Training library" />
      <Card title="Aim Lab" subtitle="Drag • flick • headshot control" value="12 drills" />
      <Card title="Movement" subtitle="Gloo wall • strafing • jumps" value="9 drills" />
      <Card title="Game Sense" subtitle="Rotations • zones • decisions" value="15 drills" />
      <Card title="Team Comms" subtitle="IGL calls • roles • timing" value="8 drills" />
      <Section title="This week" />
      <Card title="Training completion" subtitle="5 of 7 planned sessions" value="71%" />
    </Screen>
  );
}
