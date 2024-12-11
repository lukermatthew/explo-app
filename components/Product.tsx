import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface ProductProps {
  title: string;
  price: number;
  rating: number;
  image: any; // Can be a require or image URL
  onPress: () => void;
}

const Product: React.FC<ProductProps> = ({
  title,
  price,
  rating,
  image,
  onPress,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Render rating stars (filled and unfilled stars)
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      {/* Product Image */}
      <View style={{ position: "relative" }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: 180,
            resizeMode: "cover",
          }}
        />

        {/* Wishlist Heart Icon */}
        <TouchableOpacity
          onPress={handleWishlistToggle}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#ffffffcc",
            padding: 6,
            borderRadius: 50,
          }}
        >
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"}
            size={20}
            color={isWishlisted ? "#FF0000" : "#000000"}
          />
        </TouchableOpacity>
      </View>

      {/* Card Content */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 14, color: "#666" }}>
            Php {price.toFixed(2)}
          </Text>
          {/* Rating */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {renderRatingStars(rating)}
            {/* Call the function to render stars */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
