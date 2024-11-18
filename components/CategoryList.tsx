import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
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

const categories = [
  // Outdoor Activities
  { id: "10", name: "Music", icon: band }, // Flower Gardening icon
  { id: "7", name: "Gardening", icon: gardening }, // Yoga icon
  { id: "8", name: "Baking", icon: baking }, // Pilates icon
  { id: "9", name: "Gym", icon: gym }, // Gym icon
  { id: "1", name: "Hiking", icon: hiking }, // Hiking icon
  { id: "2", name: "Cycling", icon: cycling }, // Cycling icon
  { id: "3", name: "Camping", icon: camping }, // Camping icon
  { id: "4", name: "Fishing", icon: fishing }, // Fishing icon
  { id: "5", name: "Diving", icon: diving }, // Kayaking icon
  { id: "6", name: "Sports", icon: sports }, // Climbing icon
  { id: "11", name: "See all", icon: more }, // Climbing icon

  // Indoor Activities

  // Gardening

  //   { id: "11", name: "Vegetable Gardening", icon: hiking }, // Vegetable Gardening icon
  //   { id: "12", name: "Indoor Gardening", icon: hiking }, // Indoor Gardening icon

  //   // Baking
  //   { id: "13", name: "Cake Baking", icon: hiking }, // Cake Baking icon
  //   { id: "14", name: "Bread Baking", icon: hiking }, // Bread Baking icon
  //   { id: "15", name: "Cookies", icon: hiking }, // Cookie Baking icon
];

const CategoryList = () => {
  const handleCategoryPress = (categoryName: string) => {
    console.log(`Category selected: ${categoryName}`);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row mt-5 px-2"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          className="items-center mr-8 flex-1 max-w-[100px]"
          onPress={() => handleCategoryPress(category.name)}
        >
          {/* Category Image */}
          <Image source={category.icon} className="w-10 h-10 mb-2" />
          {/* Category Name */}
          <Text className="text-center text-[12px] font-medium text-gray-800 flex-wrap">
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
