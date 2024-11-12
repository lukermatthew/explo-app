import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Using FontAwesome for the star icon

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  rating,
  image,
}) => {
  return (
    <TouchableOpacity className="bg-white rounded-2xl shadow-lg my-4 mx-1 w-full">
      {/* Adjusted width to w-1/2 */}
      {/* Product Image */}
      <View className="overflow-hidden w-full">
        <Image
          source={image}
          className="w-full h-32"
          resizeMode="cover"
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
      </View>

      {/* Product Details */}
      <View className="px-2 py-2">
        {/* Title */}
        <Text className="text-sm font-semibold" numberOfLines={1}>
          {title}
        </Text>

        {/* Price */}
        <Text className="text-md font-bold text-green-500 mt-1">
          Php {price.toFixed(2)}
        </Text>

        {/* Rating */}
        {/* <View className="flex-row items-center mt-1">
          <FontAwesome name="star" size={18} color="#FFD700" />
       
          <Text className="text-xs font-medium ml-1">{rating} / 5</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
