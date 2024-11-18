import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";

interface NearbyProps {
  handleProductClick: (locations: {
    id: string;
    title: string;
    km: number;
    image: any;
  }) => void;
  locations: Array<{
    id: string;
    title: string;
    km: number;
    image: any;
  }>;
}

const Nearby: React.FC<NearbyProps> = ({ handleProductClick, locations }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {locations.map((location) => (
        <View key={location.id} className="mr-4">
          <TouchableOpacity
            onPress={() => handleProductClick(location)} // Handle product click
            className="relative w-40 h-44 rounded-xl overflow-hidden bg-white" // Tailwind classes
          >
            <Image
              source={{ uri: location.image }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />

            {/* Color Overlay */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.2)", // Black color with 40% opacity
              }}
            />

            {/* Product Details Overlay */}
            <View className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 p-4 rounded-b-lg">
              <Text className="text-white text-lg font-bold">
                {location.title}
              </Text>
              <Text className="text-white text-sm">{location.km} km away</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Nearby;
