import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "./ProductCard";

// Define prop types for TrendingAndPopular
interface TrendingPopularProps {
  handleProductClick: (product: {
    id: string;
    title: string;
    price: number;
    rating: number;
    image: any;
  }) => void;
  products: Array<{
    id: string;
    title: string;
    price: number;
    rating: number;
    image: any;
  }>;
}

const TrendingAndPopular: React.FC<TrendingPopularProps> = ({
  handleProductClick,
  products,
}) => {
  return (
    <>
      {/* Scrollable Products List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <View
            key={product.id}
            className=""
            style={{
              width: 130, // Fixed width for consistent card size
            }}
          >
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              onPress={() => handleProductClick(product)} // Pass the onPress prop to ProductCard
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default TrendingAndPopular;
