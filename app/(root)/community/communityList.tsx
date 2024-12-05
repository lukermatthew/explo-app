import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { communities } from "@/assets/constants/communities";

const CommunityList = () => {
  const router = useRouter();

  const handleCommunityPress = (communityRoute: string) => {
    router.push(`/community/community/${communityRoute}` as any);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center py-4">
            <TouchableOpacity onPress={() => router.push("../")}>
              <FontAwesome name="arrow-left" size={20} color="#999" />
            </TouchableOpacity>
            <Text className="text-[18px] font-semibold ml-3">Communities</Text>
          </View>
        </View>

        <View className="w-full">
          {communities.map((community) => (
            <TouchableOpacity
              key={community.id}
              className="flex-row items-center justify-between mb-3"
              onPress={() => handleCommunityPress(community.id)}
            >
              <View className="flex-row items-center">
                <Image
                  source={community.icon}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <Text className="text-[18px] font-semibold">
                  {community.name}
                </Text>
              </View>
              <FontAwesome name="angle-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityList;
