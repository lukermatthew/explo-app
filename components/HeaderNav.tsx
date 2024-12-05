import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HeaderNav = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between pt-4 px-4">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Avatar */}
          <TouchableOpacity>
            <Image
              source={{ uri: "https://avatar.iran.liara.run/public/1" }} // Replace with your avatar image URL
              style={{
                width: 50,
                height: 50,
                borderRadius: 25, // Make it a perfect circle
                shadowColor: "#fff", // White shadow color
                shadowOffset: { width: 0, height: 4 }, // Shadow offset
                shadowOpacity: 0.3, // Shadow opacity
                shadowRadius: 4, // Shadow blur radius
              }}
            />
          </TouchableOpacity>

          {/* Explorer Badge with Icon and Text */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#059212", // Green background for the badge
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 25, // Circular badge
              marginLeft: 10,
            }}
          >
            {/* Icon */}
            <Ionicons name="trophy" size={15} color="white" />

            {/* Text */}
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "600",
                marginLeft: 5,
              }}
            >
              Explorer
            </Text>
          </View>
        </View>
        {/* Added marginLeft to separate text from avatar */}
        {/* Notification with Badge */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {/* Notification Icon */}
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              backgroundColor: "#f0f0f0",
            }}
            onPress={() => router.push("/community/communityIndex")}
          >
            <Ionicons name="people-circle-outline" size={26} color="#059212" />
          </TouchableOpacity>

          {/* Notification Icon */}
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              backgroundColor: "#f0f0f0",
            }}
          >
            <Ionicons name="notifications-outline" size={26} color="#059212" />
          </TouchableOpacity>

          {/* Settings Icon */}
          <TouchableOpacity
            style={{
              width: 30, // Width of the container
              height: 30, // Height of the container
              justifyContent: "center", // Center the icon horizontally
              alignItems: "center", // Center the icon vertically
              borderRadius: 25, // Make it a circle
              backgroundColor: "#f0f0f0", // Gray background inside the container
            }}
          >
            <Ionicons name="settings-outline" size={26} color="#059212" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderNav;
