import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router"; // Use expo-router for navigation
import hiking from "@/assets/images/categories/traveling.png";
import cycling from "@/assets/images/categories/cycling.png";
import camping from "@/assets/images/categories/tent.png";
import fishing from "@/assets/images/categories/fisherman.png";
import diving from "@/assets/images/categories/diving.png";
import sports from "@/assets/images/categories/sports.png";
import gardening from "@/assets/images/categories/gardening.png";
import gym from "@/assets/images/categories/dumbbell.png";
import baking from "@/assets/images/categories/baking.png";
import band from "@/assets/images/categories/band.png";
import more from "@/assets/images/categories/application.png";

export const categories = [
  { id: "10", name: "Music", icon: band, route: "../../activity" },
  { id: "7", name: "Gardening", icon: gardening, route: "../../activity" },
  { id: "8", name: "Baking", icon: baking, route: "../../activity" },
  { id: "9", name: "Gym", icon: gym, route: "../../activity" },
  { id: "1", name: "Hiking", icon: hiking, route: "../../activity" },
  { id: "2", name: "Cycling", icon: cycling, route: "../../activity" },
  { id: "3", name: "Camping", icon: camping, route: "../../activity" },
  { id: "4", name: "Fishing", icon: fishing, route: "../../activity" },
  { id: "5", name: "Diving", icon: diving, route: "../../activity" },
  { id: "6", name: "Sports", icon: sports, route: "../../activity" },
  {
    id: "11",
    name: "See all",
    icon: more,
    route: "../category/categoryList",
  },
];

const CategoryList = () => {
  const router = useRouter();

  const handleCategoryPress = (categoryRoute: string) => {
    router.push(`/${categoryRoute}` as any);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexDirection: "row", marginTop: 20, paddingHorizontal: 10 }}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={{
            alignItems: "center",
            marginRight: 20,
            flex: 1,
            maxWidth: 100,
          }}
          onPress={() => handleCategoryPress(category.route)}
        >
          {/* Category Image */}
          <Image
            source={category.icon}
            style={{ width: 40, height: 40, marginBottom: 5 }}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              fontWeight: "500",
              color: "#333",
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
