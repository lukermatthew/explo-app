import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import diving from "@/assets/svg/diving.jpg";
import { products } from "../(tabs)";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState("overview");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <View className="flex-row items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesome
            key={`full-${index}`}
            name="star"
            size={16}
            color="#FFD700"
          />
        ))}
        {halfStars > 0 && (
          <FontAwesome name="star-half-o" size={16} color="#FFD700" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesome
            key={`empty-${index}`}
            name="star-o"
            size={16}
            color="#FFD700"
          />
        ))}
      </View>
    );
  };

  const scrollY = useRef(new Animated.Value(0)).current; // Animated value to track scroll position

  const headerHeight = scrollY.interpolate({
    inputRange: [0, hp(35)], // Start shrinking the banner after full height
    outputRange: [hp(35), 0], // Gradually reduce the height to 0
    extrapolate: "clamp", // Prevent values from going beyond the range
  });

  return (
    <View className="bg-white flex-1">
      {/* Animated Image Banner */}
      <Animated.View
        style={{
          height: headerHeight,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          source={product?.image}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </Animated.View>

      {/* Floating Buttons */}
      <SafeAreaView className="flex-row justify-between items-center w-full absolute px-4 mt-2">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white justify-center items-center"
        >
          <FontAwesome name="arrow-left" size={wp(4)} color="black" />
        </TouchableOpacity>

        {/* Wishlist and Other Buttons */}
        <View className="flex-row gap-3">
          <TouchableOpacity
            onPress={handleWishlistToggle}
            className="w-9 h-9 rounded-full bg-white justify-center items-center"
          >
            <FontAwesome
              name={isWishlisted ? "heart" : "heart-o"}
              size={20}
              color={isWishlisted ? "#FF0000" : "#000000"}
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 rounded-full bg-white justify-center items-center">
            <FontAwesome name="share" size={17} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 rounded-full bg-white justify-center items-center">
            <FontAwesome name="cart-plus" size={17} color="#000000" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: "hidden", // Ensures content respects the border radius
        }}
        className="px-2 flex flex-1 bg-white pt-2 -mt-10 mb-20"
      >
        {/* Content Section */}
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {/* Content */}
          <View className="flex-1 bg-white">
            {/* Tab Navigation */}
            <View className="py-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 10,
                  paddingRight: 20,
                }} // Adding paddingRight
              >
                <View className="flex-row gap-2">
                  <TouchableOpacity
                    className={`w-1/5 py-2 ${activeTab === "overview" ? "border-b-2 border-green-500" : ""}`}
                    onPress={() => setActiveTab("overview")}
                  >
                    <Text
                      className={`text-center ${activeTab === "overview" ? "font-semibold" : "text-gray-600"}`}
                    >
                      Overview
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`w-1/5 py-2 ${activeTab === "itinerary" ? "border-b-2 border-green-500" : ""}`}
                    onPress={() => setActiveTab("itinerary")}
                  >
                    <Text
                      className={`text-center ${activeTab === "itinerary" ? "font-semibold" : "text-gray-600"}`}
                    >
                      Itinerary
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`w-1/5 py-2 ${activeTab === "inclusions" ? "border-b-2 border-green-500" : ""}`}
                    onPress={() => setActiveTab("inclusions")}
                  >
                    <Text
                      className={`text-center ${activeTab === "inclusions" ? "font-semibold" : "text-gray-600"}`}
                    >
                      What's Included
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`w-1/5 py-2 ${activeTab === "reviews" ? "border-b-2 border-green-500" : ""}`}
                    onPress={() => setActiveTab("reviews")}
                  >
                    <Text
                      className={`text-center ${activeTab === "reviews" ? "font-semibold" : "text-gray-600"}`}
                    >
                      Reviews
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`w-1/5 py-2 ${activeTab === "images" ? "border-b-2 border-green-500" : ""}`}
                    onPress={() => setActiveTab("images")}
                  >
                    <Text
                      className={`text-center ${activeTab === "images" ? "font-semibold" : "text-gray-600"}`}
                    >
                      Image
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            {/* Tab Content */}
            <ScrollView className="px-5 py-4">
              {activeTab === "overview" && (
                <>
                  <Text className="text-2xl font-bold text-gray-800">
                    {product?.title}
                  </Text>
                  <Text className="text-base text-gray-600 mt-2">
                    Explore the deep blue with a thrilling diving adventure.
                    Enjoy the beauty of underwater life while diving into the
                    ocean's depths. A truly unforgettable experience for
                    adventure lovers.
                  </Text>
                  <View className="mt-1">
                    {renderRatingStars(product?.rating)}
                  </View>
                  <View className="mt-4">
                    <Text className="text-xl font-semibold text-gray-800">
                      Package Highlights
                    </Text>
                    <Text className="text-base text-gray-600 mt-2">
                      ✔ Explore vibrant coral reefs
                    </Text>
                    <Text className="text-base text-gray-600">
                      ✔ Swim with exotic marine life
                    </Text>
                    <Text className="text-base text-gray-600">
                      ✔ Professional diving instructors
                    </Text>
                    <Text className="text-base text-gray-600">
                      ✔ 2 dives per day
                    </Text>
                    <Text className="text-base text-gray-600">
                      ✔ Small group for a personalized experience
                    </Text>
                  </View>
                </>
              )}

              {activeTab === "itinerary" && (
                <>
                  <Text className="text-xl font-semibold text-gray-800">
                    Itinerary
                  </Text>
                  <Text className="text-base text-gray-600 mt-2">
                    Day 1: Arrival and Welcome Dinner
                  </Text>
                  <Text className="text-base text-gray-600 mt-1">
                    Day 2: Morning Dive - Afternoon Reef Exploration
                  </Text>
                  <Text className="text-base text-gray-600 mt-1">
                    Day 3: Full Day Dive Adventure
                  </Text>
                  <Text className="text-base text-gray-600 mt-1">
                    Day 4: Free Day and Evening Dive
                  </Text>
                  <Text className="text-base text-gray-600 mt-1">
                    Day 5: Farewell Dive and Departure
                  </Text>
                </>
              )}

              {activeTab === "inclusions" && (
                <>
                  <Text className="text-lg font-semibold text-gray-800">
                    What's Included
                  </Text>
                  <Text className="text-base text-gray-600 mt-2">
                    ✔ All equipment and gear
                  </Text>
                  <Text className="text-base text-gray-600">
                    ✔ Diving certification
                  </Text>
                  <Text className="text-base text-gray-600">
                    ✔ Snacks and drinks throughout the day
                  </Text>
                  <Text className="text-base text-gray-600">
                    ✔ Transportation to and from the dive sites
                  </Text>
                </>
              )}

              {/* Reviews Tab Content */}
              {activeTab === "reviews" && (
                <>
                  <Text className="text-xl font-semibold text-gray-800">
                    Reviews
                  </Text>
                  <View className="mt-2">
                    <Text className="text-base text-gray-600 mt-2">
                      ⭐️⭐️⭐️⭐️⭐️ - "Amazing experience! I felt like a fish
                      in the ocean!" - John D.
                    </Text>
                    <Text className="text-base text-gray-600 mt-2">
                      ⭐️⭐️⭐️⭐️ - "Great instructors and beautiful underwater
                      views." - Emma P.
                    </Text>
                    <Text className="text-base text-gray-600 mt-2">
                      ⭐️⭐️⭐️⭐️⭐️ - "The best diving experience I've ever
                      had!" - Sarah G.
                    </Text>
                  </View>
                </>
              )}

              {/* Image Suggestions Tab Content */}
              {activeTab === "images" && (
                <>
                  <Text className="text-xl font-semibold text-gray-800">
                    Image Suggestions
                  </Text>
                  <View className="mt-4 flex-row flex-wrap justify-between">
                    {/* Example Images */}
                    <Image
                      source={{ uri: "https://via.placeholder.com/150" }}
                      style={{ width: "48%", height: 150, marginBottom: 10 }}
                    />
                    <Image
                      source={{ uri: "https://via.placeholder.com/150" }}
                      style={{ width: "48%", height: 150, marginBottom: 10 }}
                    />
                    <Image
                      source={{ uri: "https://via.placeholder.com/150" }}
                      style={{ width: "48%", height: 150, marginBottom: 10 }}
                    />
                    <Image
                      source={{ uri: "https://via.placeholder.com/150" }}
                      style={{ width: "48%", height: 150, marginBottom: 10 }}
                    />
                  </View>
                </>
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      {/* Full-width Footer Container */}
      <View
        className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg flex-row justify-between items-center"
        style={{ paddingBottom: 30 }} // Optional extra padding at the bottom
      >
        {/* Price Section */}
        <View className="flex-row items-center">
          <Text className="text-[12px] text-gray-600">Price</Text>
          <Text className="text-lg font-semibold text-gray-800 mx-1">
            ₱{product?.price}
          </Text>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity
          className="w-32 py-3 bg-green-500 rounded-xl items-center"
          onPress={() => console.log("Button Pressed")}
        >
          <View className="flex-row items-center justify-center gap-1">
            <Text className="text-white text-[15px] font-semibold">Select</Text>
            <FontAwesome name="arrow-circle-o-right" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
