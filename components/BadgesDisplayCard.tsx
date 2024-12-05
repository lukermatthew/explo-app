import { getBadgeById } from "@/assets/constants/communities";
import React from "react";
import { Image } from "react-native";

const BadgesDisplayCard = ({ badge }: { badge: string }) => {
  const badgeDetails = getBadgeById(badge);

  if (!badgeDetails) return null;

  return (
    <Image
      source={badgeDetails?.icon}
      className="w-4 h-4 mt-3 mr-2 bg-green-500/50 rounded-full"
    />
  );
};

export default BadgesDisplayCard;
