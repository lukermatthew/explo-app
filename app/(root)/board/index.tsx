import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type User = {
  id: number;
  name: string;
  points: number;
  avatar: string;
  rank?: number;
};

const leaderboardData: User[] = [
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
  {
    id: 6,
    name: "Krishna Barbe",
    points: 120232,
    avatar: "https://avatar.iran.liara.run/public/1",
  },
  {
    id: 7,
    name: "Liam Grant",
    points: 112500,
    avatar: "https://avatar.iran.liara.run/public/2",
  },
  {
    id: 8,
    name: "Olivia Miles",
    points: 105600,
    avatar: "https://avatar.iran.liara.run/public/3",
  },
  {
    id: 9,
    name: "Charlotte Lewis",
    points: 103890,
    avatar: "https://avatar.iran.liara.run/public/4",
  },
  {
    id: 10,
    name: "Henry Wright",
    points: 98745,
    avatar: "https://avatar.iran.liara.run/public/5",
  },
  {
    id: 11,
    name: "Lucas Carter",
    points: 93200,
    avatar: "https://avatar.iran.liara.run/public/6",
  },
  {
    id: 12,
    name: "Amelia Green",
    points: 90000,
    avatar: "https://avatar.iran.liara.run/public/7",
  },
  {
    id: 13,
    name: "Ethan King",
    points: 87500,
    avatar: "https://avatar.iran.liara.run/public/8",
  },
  {
    id: 14,
    name: "Ella Scott",
    points: 85300,
    avatar: "https://avatar.iran.liara.run/public/9",
  },
  {
    id: 15,
    name: "Sophia Adams",
    points: 83000,
    avatar: "https://avatar.iran.liara.run/public/10",
  },
  {
    id: 16,
    name: "Mason Walker",
    points: 80000,
    avatar: "https://avatar.iran.liara.run/public/11",
  },
  {
    id: 17,
    name: "Ava Baker",
    points: 76500,
    avatar: "https://avatar.iran.liara.run/public/12",
  },
  {
    id: 18,
    name: "James Harris",
    points: 74000,
    avatar: "https://avatar.iran.liara.run/public/13",
  },
  {
    id: 19,
    name: "Mia Young",
    points: 71500,
    avatar: "https://avatar.iran.liara.run/public/14",
  },
  {
    id: 20,
    name: "Jack Mitchell",
    points: 69000,
    avatar: "https://avatar.iran.liara.run/public/15",
  },
  {
    id: 21,
    name: "Isabella Nelson",
    points: 67000,
    avatar: "https://avatar.iran.liara.run/public/16",
  },
  {
    id: 22,
    name: "Benjamin Moore",
    points: 65000,
    avatar: "https://avatar.iran.liara.run/public/17",
  },
  {
    id: 23,
    name: "Chloe Perez",
    points: 63000,
    avatar: "https://avatar.iran.liara.run/public/18",
  },
];

const topUsers: User[] = [
  {
    id: 1,
    name: "Annie Thomas",
    avatar: "https://avatar.iran.liara.run/public/1",
    rank: 2,
    points: 0,
  },
  {
    id: 2,
    name: "Michael Welsh",
    avatar: "https://avatar.iran.liara.run/public/12",
    rank: 1,
    points: 0,
  },
  {
    id: 3,
    name: "Marie Nua",
    avatar: "https://avatar.iran.liara.run/public/2",
    rank: 3,
    points: 0,
  },
];

const Leaderboard: React.FC = () => {
  const renderTopUser = ({ item, index }: { item: User; index: number }) => (
    <View
      className={`items-center bg-white rounded-lg  mx-1 ${
        index === 1
          ? "w-[110px] h-[130px] pt-3 px-2"
          : "w-[90px] h-[110px] pt-3 px-2"
      }`}
    >
      <Image
        source={{ uri: item.avatar }}
        className={`rounded-full  mb-1 ${index === 1 ? "w-20 h-20" : "w-16 h-16"}`}
      />
      <Text
        className={`text-center font-semibold mb-1 ${
          index === 1 ? "text-[12px]" : "text-[10px]"
        }`}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.name}
      </Text>
      <View
        className={`absolute ${
          index === 1 ? "bottom-[-14px] w-8 h-8" : "bottom-[-12px] w-6 h-6"
        } rounded-full bg-slate-600 items-center justify-center`}
      >
        <Text className="text-white font-bold text-xs">{item.rank}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: User }) => (
    <View className="flex-row items-center py-1 w-full border-b border-gray-300">
      <Text className="text-[16px] mr-4">{item.id}</Text>
      <Image
        source={{ uri: item.avatar }}
        className="w-8 h-8 rounded-full mr-4"
      />
      <View className="flex-1 flex-row justify-between items-center">
        <Text className="font-bold text-sm">{item.name}</Text>
        <Text className="text-green-500 text-md font-bold">
          {item.points.toLocaleString()} pts
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <SafeAreaView
        className="items-center justify-center rounded-b-[60px] h-[280px] py-1 relative"
        style={{ backgroundColor: "#37AFE1" }}
      >
        {/* Trophy Background Overlay */}
        <Image
          source={require("@/assets/images/categories/confetti.png")}
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
            zIndex: 1,
            opacity: 0.1,
            resizeMode: "stretch",
            width: 250,
            height: 250,
          }}
        />

        {/* Content */}
        <Text className="text-white text-lg font-bold text-center z-10">
          Top User Leaderboard
        </Text>
        <FlatList
          data={topUsers}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTopUser}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

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
