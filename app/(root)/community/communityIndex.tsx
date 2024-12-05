import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import communityBanner from "@/assets/images/communities/communityBanner.png";
import CommunityPostSummary from "@/components/CommunityPostSummary";
import { posts, communities } from "@/assets/constants/communities";

const CommunityIndex = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState(posts ?? []);

  const handlePostPress = (postId: string) => {
    router.push(`./community/post/${postId}`);
  };

  React.useEffect(() => {
    let updatedPosts = posts;

    if (selectedCategory !== "all") {
      updatedPosts = updatedPosts.filter(
        (post) => post.community === selectedCategory
      );
    }

    if (searchQuery) {
      updatedPosts = updatedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(updatedPosts);
  }, [selectedCategory, searchQuery]);

  return (
    <SafeAreaView className="flex-1">

      <View className="flex-row items-center justify-between px-4 pt-4 border-b border-gray-300 mb-2">
        <View className="flex-row items-center py-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold ml-3">
            Community Popular Posts
          </Text>
        </View>
        <View className="flex-row items-center py-4">
          <TouchableOpacity onPress={() => router.push("./communityList")}>
            <FontAwesome name="bars" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        <View className="w-full">
        

          <Text className="text-[42px] font-light mt-2">Discover</Text>

          <Image
            source={communityBanner}
            className="w-full h-auto rounded-xl mt-1"
            resizeMode="contain"
          />

          <View className="w-full mt-2">
            <TextInput
              placeholder="Search posts..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-[16px]"
            />
          </View>

          <ScrollView
            className="w-full flex-row py-2 pb-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity onPress={() => setSelectedCategory("all")}>
              <Text
                className={`text-[14px] font-normal px-4 py-2 rounded-full ${
                  selectedCategory === "all"
                    ? "bg-red-300"
                    : "border border-gray-300"
                }`}
              >
                All
              </Text>
            </TouchableOpacity>

            {communities.map((community) => (
              <TouchableOpacity
                key={community.name}
                onPress={() => setSelectedCategory(community.id)}
              >
                <Text
                  className={`text-[14px] font-normal ml-1 px-4 py-2 rounded-full ${
                    selectedCategory === community.id
                      ? "bg-red-300"
                      : "border border-gray-300"
                  }`}
                >
                  {community.name.replace(" Community", "")}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="w-full">
            {filteredPosts.map((post) => (
              <CommunityPostSummary key={post.id} {...post} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityIndex;
