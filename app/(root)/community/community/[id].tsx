import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import {
  findCommunityPostsLists,
  findPostsCommunity,
} from "@/assets/constants/communities";
import CommunityPostSummary from "@/components/CommunityPostSummary";

const CommunityPosts = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  React.useEffect(() => {
    let updatedPosts = findCommunityPostsLists(id);

    if (searchQuery) {
      updatedPosts = updatedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredPosts(updatedPosts);
  }, [searchQuery]);

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex-row items-center py-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold ml-3">
            {findPostsCommunity(id).name}
          </Text>
        </View>
        <Text className="text-[42px] font-light pt-2 border-t border-gray-300">
          {findPostsCommunity(id).name}
        </Text>
        <View className="w-full h-auto border-b border-gray-300 py-4 mb-4">
          <Image
            source={findPostsCommunity(id).icon}
            className="w-full h-40"
            resizeMode="contain"
          />
        </View>
        <View className="w-full mt-2">
          <TextInput
            placeholder="Search posts..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-[16px]"
          />
        </View>
        <View className="w-full mt-4">
          {filteredPosts.map((post) => (
            <CommunityPostSummary key={post.id} {...post} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityPosts;
