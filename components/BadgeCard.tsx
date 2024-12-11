import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const userLevel = "Explorer";
const reward = "Free Wash";

const BadgeCard = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push("../../badge")}
      className="mx-4 px-6 py-6 mt-6 bg-[#1F8A70] shadow-lg rounded-lg"
    >
      <Text className="text-lg font-semibold text-white">
        Reward Level: {userLevel}
        <FontAwesome name="trophy" size={30} color="yellow" />
      </Text>
      <Text className="text-gray-200 mt-2">
        Congratulations! You've earned a {reward}. Keep up the great work!
      </Text>
    </TouchableOpacity>
  );
};

export default BadgeCard;
