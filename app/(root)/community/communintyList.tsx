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

const CategoryList = () => {
  const router = useRouter();

  // Handle category press to navigate
  const handleCategoryPress = (categoryRoute: string) => {
    router.push(`/${categoryRoute}` as any);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex-row items-center p-4"></View>

        <View className="flex flex-row flex-wrap "></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryList;
