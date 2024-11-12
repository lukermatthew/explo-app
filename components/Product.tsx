import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Type for props
interface ProductProps {
  title: string;
  price: number;
  rating: number;
  image: any; // Can be a require or image URL
}

const Product: React.FC<ProductProps> = ({ title, price, rating, image }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
        borderWidth: 1, // Border width for card
        borderColor: "#ddd", // Border color
        shadowColor: "#000", // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.2, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow radius for iOS
        elevation: 4, // Shadow for Android
      }}
    >
      {/* Image */}
      <Image
        source={image}
        style={{
          width: "100%",
          height: 180,
          resizeMode: "cover",
        }}
      />

      {/* Card Content */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 14, color: "#666" }}>Php {price}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 14, color: "#9BCF53" }}>{rating}</Text>
            <Text style={{ fontSize: 14, color: "#9BCF53" }}>★</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
