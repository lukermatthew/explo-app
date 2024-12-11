import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const BadgeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView className="px-5">
        {/* Header */}
        <View className="flex flex-row items-center gap-2 w-full mb-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="caret-left" size={30} color="#999" />
          </TouchableOpacity>
          <Text className="text-center text-[16px] font-semibold flex-grow">
            Badge Level
          </Text>
        </View>
        <ScrollView>
          {/* Card */}
          <View className="rounded-3xl overflow-hidden shadow-lg bg-white h-[600px]">
            {/* Banner with Gradient Overlay */}
            <View className="relative">
              <Image
                source={{
                  uri: "https://via.placeholder.com/300x150",
                }}
                className="w-full h-[250px]"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-[20px]" />
              <Text className="absolute bottom-4 left-4 text-white font-bold text-lg">
                Exclusive Rewards
              </Text>
            </View>

            {/* Details Section */}
            <View className="p-6 space-y-4">
              {/* Badge */}
              <View className="flex flex-row items-center space-x-2">
                <View className="bg-yellow-400 text-white px-3 py-1 rounded-full">
                  <Text className="text-sm font-bold">Gold Member</Text>
                </View>
              </View>

              {/* Title */}
              <Text className="text-xl font-semibold text-gray-800">
                Unlock Premium Benefits
              </Text>

              {/* Description */}
              <Text className="text-gray-600">
                Enjoy exclusive access to premium perks, discounts, and more
                with our rewards program. Upgrade your experiences today!
              </Text>

              {/* Action Button */}
              <View className="flex items-center">
                <Text className="bg-blue-600 text-white px-5 py-3 rounded-full text-center font-semibold shadow-md">
                  Redeem Now
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default BadgeScreen;
