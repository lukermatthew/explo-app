import { Tabs, useRouter } from "expo-router";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const router = useRouter();

  const handlePress = () => {
    router.push("/explore");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "trophy" : "trophy-outline"}
              color="#640D5F"
            />
          ),
        }}
      />

      {/* Deals Tab */}
      <Tabs.Screen
        name="deal"
        options={{
          title: "Deals",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ticket" : "ticket-outline"}
              color="#640D5F"
            />
          ),
        }}
      />

      {/* Center Button Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                top: -25,
                borderRadius: 35,
                backgroundColor: "#0D92F4",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 8,
              }}
              onPress={handlePress}
              activeOpacity={1} // This will prevent the button from changing opacity when pressed
            >
              <TabBarIcon name="walk-sharp" color="white" size={32} />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color="#640D5F"
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color="#640D5F"
            />
          ),
        }}
      />
    </Tabs>
  );
}
