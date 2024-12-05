import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


const CommunityPosts = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const handlePostPress = (postId: string) => {
    router.push(`../post/${postId}` as any);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex-row items-center py-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold ml-3">Community {id}</Text>
        </View>


        <View className="w-full">
          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityPosts;
