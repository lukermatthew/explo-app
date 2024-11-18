import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#059212",
        tabBarInactiveTintColor: "#A1A1A1",
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "normal",
          marginBottom: 4,
          textTransform: "capitalize",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#059212" : color}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="deal"
        options={{
          title: "Deals",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ticket" : "ticket-outline"}
              color={focused ? "#059212" : color}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="feature"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "trophy" : "trophy-outline"}
              color={focused ? "#059212" : color}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={focused ? "#059212" : color}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={focused ? "#059212" : color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
