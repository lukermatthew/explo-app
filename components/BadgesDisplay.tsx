import React from "react";
import { ScrollView, View } from "react-native";
import BadgesDisplayCard from "./BadgesDisplayCard";

const BadgesDisplay = ({ badges }: { badges: string[] }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      <View className="flex flex-row gap-2">
        {badges.map((badge) => (
          <BadgesDisplayCard badge={badge} key={badge} />
        ))}
      </View>
    </ScrollView>
  );
};

export default BadgesDisplay;