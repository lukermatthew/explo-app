import React from "react";
import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";

// Define prop types for TrendingAndPopular
interface TrendingPopularProps {
  handleProductClick: (productId: string) => void;
  products: Array<{
    id: string;
    title: string;
    price: number;
    rating: number;
    image: any;
  }>;
}

const TrendingAndPopular: React.FC<TrendingPopularProps> = ({
  handleProductClick,
  products,
}) => {
  return (
    <>
      {/* Scrollable Products List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <View
            key={product.id}
            className=""
            style={{
              width: 130,
            }}
          >
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              onPress={() => handleProductClick(product.id)}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default TrendingAndPopular;
