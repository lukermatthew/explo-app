import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import banner from "@/assets/svg/banner.png";

// Sample data for each category
const data = {
  deals: [
    {
      id: 1,
      title: "50% Off Laundry",
      description: "Get 50% off on your next wash!",
      image: banner,
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      description: "Exclusive offer on select services.",
      image: banner,
    },
  ],
  promos: [
    {
      id: 3,
      title: "Promo Code: SAVE10",
      description: "Use SAVE10 for $10 off.",
      image: banner,
    },
  ],
  vouchers: [
    {
      id: 4,
      title: "Voucher $20",
      description: "Redeemable on next purchase.",
      image: banner,
    },
  ],
  rewards: [
    {
      id: 5,
      title: "Explorer Badge",
      description: "You've unlocked the Explorer badge!",
      image: banner,
    },
  ],
};

const DealsScreen = () => {
  const [activeTab, setActiveTab] = useState("deals");

  // Function to render each card in the FlatList
  const renderCard = ({ item }) => (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4">
      <Image
        source={item.image}
        className="w-full h-40 rounded-md"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold mt-4">{item.title}</Text>
      <Text className="text-gray-600 mt-2">{item.description}</Text>
      <TouchableOpacity className="mt-3 bg-green-500 p-2 rounded-md">
        <Text className="text-center text-white font-semibold">
          Claim Offer
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-row justify-around bg-white p-4 shadow-sm">
        {["deals", "promos", "vouchers", "rewards"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              className={`text-lg font-bold ${activeTab === tab ? "text-green-500" : "text-gray-400"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={data[activeTab]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default DealsScreen;
