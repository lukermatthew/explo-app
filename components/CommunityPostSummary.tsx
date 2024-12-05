import { findPostsCommunity } from "@/assets/constants/communities";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BadgesDisplay from "./BadgesDisplay";

interface CommunityPostSummaryProps {
  id: string;
  title: string;
  community: string;
  postedBy: string;
  profileImage: string;
  thumbnailImage: string;
  createdAt: string;
  upVote: number;
  downVote: number;
  comments: number;
  userBadges: string[]
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const CommunityPostSummary: React.FC<CommunityPostSummaryProps> = ({
  id,
  title,
  community,
  postedBy,
  profileImage,
  thumbnailImage,
  createdAt,
  upVote,
  downVote,
  comments,
  userBadges
}) => {
  const router = useRouter();

  const handlePostPress = (postId: string) => {
    router.push(`./community/post/${postId}` as any);
  };

  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  return (
    <View key={id} className="flex-col w-full items-center justify-between border-b border-gray-300 py-2">
      <TouchableOpacity
        className="flex-row w-full items-center justify-between"
        onPress={() => handlePostPress(id)}
      >
        <View className="flex-col w-full gap-2">
          <View className="flex-row items-center">
            <Image
              source={profileImage}
              className="w-12 h-12 rounded-full mr-2"
            />
            <View className="flex-col justify-between">
              <Text className="text-[14px] font-bold">
                {findPostsCommunity(community).name} -> {postedBy}
              </Text>
              {userBadges.length > 0 && 
                <View className="flex-col justify-between">
                  <BadgesDisplay badges={userBadges} />
                </View>
              }
              <Text className="text-[12px] font-light">
                {formatDate(createdAt)}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[16px] font-bold">{title}</Text>
          </View>
          {thumbnailImage && (
            <Image
              source={thumbnailImage}
              className="w-full h-auto rounded-xl mb-2"
              resizeMode="contain"
            />
          )}
        </View>
      </TouchableOpacity>
      <View className="flex-row w-full justify-between">
        <View className="flex-row items-center justify-center gap-2">
          <TouchableOpacity onPress={() => setIsUpVoted(!isUpVoted)} className="flex-row gap-2 p2">
            <FontAwesome name="arrow-up" size={15} color={isUpVoted ? "red" : "#999"} />
            {upVote > 0 && (
              <Text className="text-[12px] font-bold">
                {upVote + (isUpVoted ? 1 : 0)}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDownVoted(!isDownVoted)} className="flex-row gap-2 p2">
            <FontAwesome name="arrow-down" size={15} color={isDownVoted ? "red" : "#999"} />
            {downVote > 0 && (
              <Text className="text-[12px] font-bold">
                {downVote + (isDownVoted ? 1 : 0)}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePostPress(id)} className="flex-row gap-2 p2" >
            <FontAwesome name="comments" size={15} color="#999" />
            {comments > 0 && (
              <Text className="text-[12px] font-bold">
                {comments}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center p-2">
          <TouchableOpacity onPress={() => handlePostPress(id)}>
            <FontAwesome name="share" size={15} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommunityPostSummary;
