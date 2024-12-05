import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import {
  findCommunityPosts,
  getNestedComments,
  getPostCommentsCount,
} from "@/assets/constants/communities";
import BadgesDisplay from "@/components/BadgesDisplay";

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

const Comment = ({ comment }: any) => {
  return (
    <View key={comment.id} className="bg-gray-100 rounded-lg p-2 mb-2 ml-4">
      {/* {comment.profileImage && (
        <Image
          source={{ uri: comment.profileImage }}
          className="w-8 h-8 rounded-full mr-2"
        />
      )} */}
      <Text className="text-sm font-semibold">{comment.commentedBy}</Text>
      <Text className="text-sm text-gray-700">{comment.content}</Text>
      <View className="flex-row">
        <TouchableOpacity onPress={() => null} className="flex-row gap-2 p-2">
          <FontAwesome name="arrow-up" size={15} color="#999" />
          {comment.upVotes > 0 && (
            <Text className="text-[12px] font-bold">{comment.upVotes}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} className="flex-row gap-2 p-2">
          <FontAwesome name="arrow-down" size={15} color="#999" />
          {comment.downVotes > 0 && (
            <Text className="text-[12px] font-bold">{comment.downVotes}</Text>
          )}
        </TouchableOpacity>
      </View>
      {comment.replies && comment.replies.length > 0 && (
        <View className="ml-4">
          {comment.replies.map((reply: any) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </View>
      )}
    </View>
  );
};

const PostDetails = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const router = useRouter();

  const [post, setPost] = useState(findCommunityPosts(id));
  const [loading, setLoading] = useState(true);
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  useEffect(() => {
    if (id) {
      const postData = findCommunityPosts(id);
      setPost(postData);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#999" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-between px-4 pt-4 border-b border-gray-300 mb-2">
        <View className="flex-row items-center py-4">
          <TouchableOpacity onPress={() => router.push("../")}>
            <FontAwesome name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold ml-3">{post.title}</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-4">
        <View className="w-full mb-4">
          <Text className="text-[24px] font-bold">{post.title}</Text>
          <Text className="text-sm text-gray-500">
            Posted by: <Text className="font-semibold">{post.postedBy}</Text>
            {"  "}•{"  "}
            <Text className="font-light">{formatDate(post.createdAt)}</Text>
          </Text>
          <View className="flex-col justify-between mb-4">
            {post.userBadges.length > 0 && 
              <View className="flex-col justify-between">
                <BadgesDisplay badges={post.userBadges} />
              </View>
            }
          </View> 
          {post.image && (
            <Image
              source={post.image}
              className="w-full h-48 rounded-lg mb-4"
              resizeMode="cover"
            />
          )}
          <Text className="text-base text-gray-700">{post.body}</Text>

          <View className="flex-row w-full justify-between py-2 my-4 border-y border-gray-300">
            <View className="flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => setIsUpVoted(!isUpVoted)}
                className="flex-row gap-2 p-2"
              >
                <FontAwesome
                  name="arrow-up"
                  size={15}
                  color={isUpVoted ? "red" : "#999"}
                />
                {post.upVote > 0 && (
                  <Text className="text-[12px] font-bold">
                    {post.upVote + (isUpVoted ? 1 : 0)}
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsDownVoted(!isDownVoted)}
                className="flex-row gap-2 p-2"
              >
                <FontAwesome
                  name="arrow-down"
                  size={15}
                  color={isDownVoted ? "red" : "#999"}
                />
                {post.downVote > 0 && (
                  <Text className="text-[12px] font-bold">
                    {post.downVote + (isDownVoted ? 1 : 0)}
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => null}
                className="flex-row gap-2 p-2"
              >
                <FontAwesome name="comments" size={15} color="#999" />
                {getPostCommentsCount(post.id) > 0 && (
                  <Text className="text-[12px] font-bold">{getPostCommentsCount(post.id)}</Text>
                )}
              </TouchableOpacity>
            </View>
            <View className="flex-row p-2">
              <TouchableOpacity onPress={() => null}>
                <FontAwesome name="share" size={15} color="#999" />
              </TouchableOpacity>
            </View>
          </View> 
          <View>
            {getNestedComments(post.id).map((comment: any) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetails;
