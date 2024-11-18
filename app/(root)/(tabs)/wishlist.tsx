import ProductCard from "@/components/ProductCard";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

import baking from "@/assets/svg/baking.png";
import zoo from "@/assets/svg/zoo.png";
import { products } from ".";

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

const WishList = () => {
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

export default WishList;
