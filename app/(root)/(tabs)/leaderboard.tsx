import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type User = {
  id: number;
  name: string;
  points: number;
  avatar: string;
  rank?: number;
};

type Category = {
  id: number;
  name: string;
  points: number;
  users: User[];
  usersJoined: number;
  bannerUrl: string;
};

const leaderboardData: Category[] = [
  {
    id: 1,
    name: "Top User Leaderboard",
    points: 139120,
    usersJoined: 5,
    bannerUrl: "https://via.placeholder.com/350x150",
    users: [
      {
        id: 4,
        name: "Elanor Pera",
        points: 139120,
        avatar: "https://avatar.iran.liara.run/public/1",
      },
      {
        id: 5,
        name: "Hannah Burness",
        points: 123324,
        avatar: "https://avatar.iran.liara.run/public/1",
      },
    ],
  },
  {
    id: 2,
    name: "Top Monthly user leaderboard",
    points: 123324,
    usersJoined: 3,
    bannerUrl: "https://via.placeholder.com/350x150",
    users: [
      {
        id: 6,
        name: "John Doe",
        points: 102234,
        avatar: "https://avatar.iran.liara.run/public/2",
      },
      {
        id: 7,
        name: "Jane Smith",
        points: 92345,
        avatar: "https://avatar.iran.liara.run/public/3",
      },
    ],
  },
  {
    id: 3,
    name: "Top Monthly user leaderboard",
    points: 123324,
    usersJoined: 3,
    bannerUrl: "https://via.placeholder.com/350x150",
    users: [
      {
        id: 6,
        name: "John Doe",
        points: 102234,
        avatar: "https://avatar.iran.liara.run/public/2",
      },
      {
        id: 7,
        name: "Jane Smith",
        points: 92345,
        avatar: "https://avatar.iran.liara.run/public/3",
      },
    ],
  },
  {
    id: 4,
    name: "Top Monthly user leaderboard",
    points: 123324,
    usersJoined: 3,
    bannerUrl: "https://via.placeholder.com/350x150",
    users: [
      {
        id: 6,
        name: "John Doe",
        points: 102234,
        avatar: "https://avatar.iran.liara.run/public/2",
      },
      {
        id: 7,
        name: "Jane Smith",
        points: 92345,
        avatar: "https://avatar.iran.liara.run/public/3",
      },
    ],
  },
];

const Leaderboard: React.FC = () => {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      onPress={() => router.push("../../board")}
      style={{
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
    >
      {/* Category Name with Icon */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <FontAwesome
          name="trophy"
          size={25}
          color="#FFDC7F"
          style={{ marginRight: 8 }}
        />
        {/* Icon */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {item.name}
        </Text>
      </View>

      {/* Users Joined */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ color: "#888", fontSize: 14 }}>
          {item.usersJoined} Users Joined
        </Text>
      </View>

      {/* User Avatars */}
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        {item.users.map((user, index) => (
          <Image
            key={index}
            source={{ uri: user.avatar }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: -10, // Overlap avatars slightly
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        ))}
      </View>

      {/* Points */}
      <Text
        style={{
          color: "#28A745",
          fontWeight: "bold",
          fontSize: 16,
          textAlign: "right",
        }}
      >
        {item.points.toLocaleString()} pts
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 200,
          backgroundColor: "#0D92F4",
          paddingVertical: 20,
        }}
      >
        <Image
          source={require("@/assets/images/categories/confetti.png")}
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
            zIndex: 1,
            opacity: 0.3,
            resizeMode: "stretch",
            width: 200,
            height: 200,
          }}
        />

        {/* Content */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Text
            onPress={() => router.push("../../board")}
            style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
          >
            Welcome to leaderboard, Most Points Earned Leaderboard
          </Text>

          {/* Icon */}
          <FontAwesome name="trophy" size={50} color="white" />
        </View>
      </SafeAreaView>

      {/* Leaderboard List */}
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 16,
          paddingTop: 5,
        }}
      />
    </View>
  );
};

export default Leaderboard;
