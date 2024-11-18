import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router"; // Use expo-router for navigation

// Importing images for categories
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
import { FontAwesome } from "@expo/vector-icons";

// Categories data
const categories = [
  { id: "10", name: "Music", icon: band, route: "music" },
  { id: "7", name: "Gardening", icon: gardening, route: "gardening" },
  { id: "8", name: "Baking", icon: baking, route: "baking" },
  { id: "9", name: "Gym", icon: gym, route: "gym" },
  { id: "1", name: "Hiking", icon: hiking, route: "hiking" },
  { id: "2", name: "Cycling", icon: cycling, route: "cycling" },
  { id: "3", name: "Camping", icon: camping, route: "camping" },
  { id: "4", name: "Fishing", icon: fishing, route: "fishing" },
  { id: "5", name: "Diving", icon: diving, route: "diving" },
  { id: "6", name: "Sports", icon: sports, route: "sports" },
  { id: "11", name: "See all", icon: more, route: "feature/categoryList" },
];

const CategoryList = () => {
  const router = useRouter();

  // Handle category press to navigate
  const handleCategoryPress = (categoryRoute: string) => {
    router.push(`/${categoryRoute}` as any);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex-row items-center p-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold ml-3">All Categories</Text>
        </View>

        <View className="flex flex-row flex-wrap ">
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategoryPress(category.route)}
              className="w-1/4 p-2 flex-shrink-0" // Adjusted width to 1/4 to increase the size of each item
            >
              <View className="flex flex-col items-center justify-center p-1 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                {/* Category Icon */}
                <Image
                  source={category.icon}
                  className="w-8 h-8 mb-2 object-contain"
                />
                {/* Category Name */}
                <Text className="text-sm font-semibold text-gray-800 text-center">
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryList;
