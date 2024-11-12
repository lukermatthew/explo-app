import React from "react";
import { SafeAreaView, StatusBar, Text, View, ScrollView } from "react-native";
import ProductCard from "@/components/ProductCard";
import { products } from ".";
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

export const wishlists = [
  {
    id: 7,
    title: "Baking Class - Master the Art of Pastry",
    price: 299.99,
    rating: 5.0,
    image: baking,
  },

  {
    id: 10,
    title: "Zoo Tour - A Fun Day with Wildlife",
    price: 299.99,
    rating: 5.0,
    image: zoo,
  },
];

const FavoriteScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Main ScrollView to make the whole screen scrollable */}
      <ScrollView className="flex-1">
        {/* WishList Section */}
        <View className="px-4 mt-4">
          <Text className="text-[20px] font-bold">WishList</Text>
        </View>
        <View
          className="flex flex-wrap flex-row justify-between"
          style={{ paddingHorizontal: 10 }}
        >
          {wishlists.map((product) => (
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
        </View>

        {/* Recommendation Section */}
        <View className="px-4 mt-10">
          <Text className="text-[20px] font-bold">Recommendation</Text>
        </View>
        <View
          className="flex flex-wrap flex-row justify-between"
          style={{ paddingHorizontal: 10 }}
        >
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
        </View>
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

export default FavoriteScreen;
