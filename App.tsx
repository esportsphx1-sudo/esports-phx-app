import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import PracticeScreen from "./src/screens/PracticeScreen";
import PlaybookScreen from "./src/screens/PlaybookScreen";
import CommunityScreen from "./src/screens/CommunityScreen";
import MoreScreen from "./src/screens/MoreScreen";
import DetailScreen from "./src/screens/DetailScreen";

const colors = {
  bg: "#05070B",
  card: "#0B1018",
  border: "#171E29",
  text: "#F4F7FA",
  muted: "#7C8796",
  accent: "#55CFF1"
};

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color, size }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: "home-outline",
            Matches: "flash-outline",
            Practice: "fitness-outline",
            Playbook: "map-outline",
            Community: "people-outline",
            More: "ellipsis-horizontal"
          };
          return <Ionicons name={map[route.name] || "ellipse-outline"} size={size} color={color} />;
        }
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Matches" component={MatchesScreen} />
      <Tabs.Screen name="Practice" component={PracticeScreen} />
      <Tabs.Screen name="Playbook" component={PlaybookScreen} />
      <Tabs.Screen name="Community" component={CommunityScreen} />
      <Tabs.Screen name="More" component={MoreScreen} />
    </Tabs.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: "800" },
        contentStyle: { backgroundColor: colors.bg }
      }}
    >
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "PHX ESPORTS" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={{
      ...DarkTheme,
      colors: { ...DarkTheme.colors, background: colors.bg, card: colors.card, text: colors.text, border: colors.border, primary: colors.accent }
    }}>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#080C12",
    borderTopColor: colors.border,
    height: 66,
    paddingBottom: 7,
    paddingTop: 6
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "700"
  }
});
