import React from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import Section from "../components/Section";
import Card from "../components/Card";
import { theme } from "../theme";

export default function MoreScreen() {
  return (
    <Screen>
      <Text style={{color: theme.text, fontSize: 28, fontWeight: "900"}}>More</Text>
      <Text style={{color: theme.muted, marginTop: 5}}>Profile, team workspace and app settings.</Text>
      <Section title="Workspace" />
      <Card title="My profile" subtitle="IGN • role • Free Fire MAX UID" value="→" />
      <Card title="My team" subtitle="Roster, roles and permissions" value="→" />
      <Card title="POV library" subtitle="Review uploaded gameplay" value="→" />
      <Section title="Settings" />
      <Card title="Notifications" value="→" />
      <Card title="App settings" value="→" />
    </Screen>
  );
}
