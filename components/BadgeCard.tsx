import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";

// Placeholder for user's level and reward (this could be dynamic based on the user data)
const userLevel = "Explorer"; // Example: could be 'Newbie', 'Explorer', etc.
const reward = "Free Wash"; // Example: could be dynamic based on the user's reward

const BadgeCard = () => {
  const [buttonScale] = useState(new Animated.Value(1)); // Scale animation for the button
  const [cardElevation] = useState(new Animated.Value(1)); // Card elevation animation
  const [badgeOpacity] = useState(new Animated.Value(0)); // Badge opacity animation

  // Trigger the badge fade-in animation when the component is mounted
  React.useEffect(() => {
    Animated.timing(badgeOpacity, {
      toValue: 1,
      duration: 600,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // Animate card elevation when the component is mounted
    Animated.spring(cardElevation, {
      toValue: 1.05, // Slight elevation
      friction: 3,
      tension: 150,
      useNativeDriver: true,
    }).start();
  }, []);

  // Scale animation when the button is pressed
  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95, // Shrinks the button slightly
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1, // Resets to normal size
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      className="px-6 py-6 mt-6 bg-[#1F8A70] shadow-lg rounded-lg relative"
      style={{
        transform: [{ scale: cardElevation }],
      }}
    >
      {/* Card Content */}
      <Text className="text-lg font-semibold text-white">
        Reward Level: {userLevel}
        <FontAwesome name="trophy" size={30} color="yellow" />
      </Text>
      <Text className="text-gray-200 mt-2">
        Congratulations! You've earned a {reward}. Keep up the great work!
      </Text>
    </Animated.View>
  );
};

export default BadgeCard;
