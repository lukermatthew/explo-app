import BadgeCard from "@/components/BadgeCard";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const AccountManagementScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* StatusBar Setup */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header Section */}
        <View className="px-4 pt-6 flex-row items-center">
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public/1" }}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <View className="ml-4">
            <Text className="text-xl font-semibold">Juan Dela Cruz</Text>
            <Text className="text-gray-500">juan.delacruz@example.com</Text>
          </View>
        </View>

        <BadgeCard />

        {/* Account Actions */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-semibold mb-3">Account Settings</Text>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-300">
            <FontAwesome name="user" size={20} color="#333" />
            <Text className="ml-4 text-base">Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-300">
            <FontAwesome name="lock" size={20} color="#333" />
            <Text className="ml-4 text-base">Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-300">
            <FontAwesome name="credit-card" size={20} color="#333" />
            <Text className="ml-4 text-base">Payment Methods</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-300">
            <FontAwesome name="question-circle" size={20} color="#333" />
            <Text className="ml-4 text-base">Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-300">
            <FontAwesome name="key" size={20} color="#333" />
            <Text className="ml-4 text-base">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountManagementScreen;
