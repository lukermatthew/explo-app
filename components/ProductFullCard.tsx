import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProductFullCardProps {
  title: string;
  price: number;
  rating: number;
  image: any;
  onPress: () => void;
}

const ProductFullCard: React.FC<ProductFullCardProps> = ({
  title,
  price,
  rating,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ position: "relative", width: "100%", height: 250 }}
    >
      {/* Full background image */}
      <Image
        source={image}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 8,
          resizeMode: "cover",
        }}
      />

      {/* Product details overlay */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          padding: 10,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>
          ₱{price.toFixed(2)}
        </Text>
        <Text style={{ color: "white", fontSize: 12 }}>Rating: {rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductFullCard;
