import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from "react-native";
import HeaderNav from "@/components/HeaderNav";
import banner from "@/assets/svg/banner.png";
import ProductCard from "@/components/ProductCard";
import diving from "@/assets/svg/diving.jpg";
import hiking from "@/assets/svg/hiking.jpg";
import pottery from "@/assets/svg/pottery.png";
import fishing from "@/assets/svg/fishing.png";
import gardening from "@/assets/svg/gardening.png";
import sports from "@/assets/svg/sports.png";
import baking from "@/assets/svg/baking.png";
import music from "@/assets/svg/music.png";
import science from "@/assets/svg/science.png";
import zoo from "@/assets/svg/zoo.png";

export const products = [
  {
    id: 1,
    title: "Diving Adventure - Explore the Deep Blue",
    price: 59.99, // Price in USD
    rating: 4.5,
    image: diving,
  },
  {
    id: 2,
    title: "Mountain Trekking - Conquer the Peaks",
    price: 129.99,
    rating: 4.7,
    image: hiking,
  },
  {
    id: 3,
    title: "Pottery Class - Create Masterpieces with Clay",
    price: 89.99,
    rating: 4.3,
    image: pottery,
  },
  {
    id: 4,
    title: "Fishing Expedition - Catch the Big One",
    price: 199.99,
    rating: 4.8,
    image: fishing,
  },
  {
    id: 5,
    title: "Gardening Experience - Grow Your Green Thumb",
    price: 299.99,
    rating: 5.0,
    image: gardening,
  },
  {
    id: 6,
    title: "Sports Day - A Thrill for Every Athlete",
    price: 299.99,
    rating: 5.0,
    image: sports,
  },
  {
    id: 7,
    title: "Baking Class - Master the Art of Pastry",
    price: 299.99,
    rating: 5.0,
    image: baking,
  },
  {
    id: 8,
    title: "Music Class - Learn to Play Like a Pro",
    price: 299.99,
    rating: 5.0,
    image: music,
  },
  {
    id: 9,
    title: "Science Exploration - Fun Experiments for All",
    price: 299.99,
    rating: 5.0,
    image: science,
  },
  {
    id: 10,
    title: "Zoo Tour - A Fun Day with Wildlife",
    price: 299.99,
    rating: 5.0,
    image: zoo,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderNav />

      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text className="text-[25px] font-bold px-4 bg-white">
          Hello, Juan!
        </Text>
        <Image
          source={banner}
          className="w-full h-48 rounded-xl"
          resizeMode="contain"
        />

        {/* Scrollable Product Cards */}
        <View className="px-4 mt-4">
          <Text className="text-[16px] font-bold">
            Trending & Popular Experience
          </Text>
        </View>
        {products.map((product) => (
          <View
            key={product.id}
            style={{
              width: "48%", // Adjust to 48% width so two items fit per row
              marginBottom: 10, // Space between rows
            }}
          >
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </View>
        ))}
      </ScrollView>

      {/* StatusBar Setup */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
