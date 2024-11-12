import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import HeaderNav from "@/components/HeaderNav";
import banner from "@/assets/svg/banner.png";
import ProductCard from "@/components/ProductCard";
import diving from "@/assets/svg/diving.jpg";
import hiking from "@/assets/svg/hiking.jpg";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome for the search icon
import { useRouter } from "expo-router";
import Product from "@/components/Product";
import { products } from ".";

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Search Box */}
      <View className="flex-row items-center px-4 py-2 bg-white">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#999" />
        </TouchableOpacity>

        {/* Search Box */}
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for activities, hobbies"
          placeholderTextColor="#aaa"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            paddingVertical: 10,
            paddingLeft: 10,
            fontSize: 16,
            color: "#333",
            borderWidth: 0.5,
            borderColor: isFocused ? "green" : "",
            borderRadius: 50,
            marginLeft: 10,
          }}
        />

        {/* Cart Icon */}
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome
            name="shopping-cart"
            size={20}
            color="#999"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View className=" m-4">
        <Text className="text-[16px] font-bold">
          Trending & Popular Experience
        </Text>
      </View>

      {/* Scrollable Product Cards */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        {/* Scrollable Product Cards */}

        <View className="w-full">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((product) => (
              <View key={product.id}>
                <Product
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

export default ExploreScreen;
