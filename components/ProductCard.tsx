import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  rating,
  image,
  onPress,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false); // State for wishlist toggle

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Render rating stars (filled and unfilled stars)
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <View className="flex-row items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesome
            key={`full-${index}`}
            name="star"
            size={16}
            color="#FFD700"
          />
        ))}
        {halfStars > 0 && (
          <FontAwesome name="star-half-o" size={16} color="#FFD700" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesome
            key={`empty-${index}`}
            name="star-o"
            size={16}
            color="#FFD700"
          />
        ))}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress} // Handle card click
      className="bg-white rounded-2xl border-1 border-black my-4 mx-1 w-[120px] h-[150px]"
    >
      {/* Product Image with Wishlist Icon */}
      <View className="overflow-hidden w-full relative">
        <Image
          source={image}
          className="w-full h-[80px]"
          resizeMode="cover"
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        {/* Heart Icon */}
        <TouchableOpacity
          onPress={handleWishlistToggle} // Toggle wishlist state
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#ffffffcc", // Semi-transparent background for contrast
            padding: 6,
            borderRadius: 50,
          }}
        >
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"} // Filled or outline heart
            size={16}
            color={isWishlisted ? "#FF0000" : "#000000"} // Red for filled, black for outline
          />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View className="px-2 py-2">
        <Text className="text-[12px] font-semibold" numberOfLines={1}>
          {title}
        </Text>
        <View className="mt-1">{renderRatingStars(rating)}</View>
        <Text className="text-md font-bold mt-1">₱ {price.toFixed(2)}</Text>
        {/* Rating */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
