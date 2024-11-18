import React, { useState } from "react";
import baking from "@/assets/svg/baking.png";
import banner from "@/assets/svg/banner.png";
import diving from "@/assets/svg/diving.jpg";
import fishing from "@/assets/svg/fishing.png";
import gardening from "@/assets/svg/gardening.png";
import hiking from "@/assets/svg/hiking.jpg";
import music from "@/assets/svg/music.png";
import pottery from "@/assets/svg/pottery.png";
import science from "@/assets/svg/science.png";
import sports from "@/assets/svg/sports.png";
import zoo from "@/assets/svg/zoo.png";
import HeaderNav from "@/components/HeaderNav";
import TrendingAndPopular from "@/components/TrendingAndPopular";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryList from "@/components/CategoryList";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Nearby from "@/components/Nearby";

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: any;
}

interface Location {
  id: string;
  title: string;
  km: number;
  image: any;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Diving Adventure - Explore the Deep Blue",
    price: 59.99,
    rating: 4.5,
    image: diving,
  },
  {
    id: "2",
    title: "Mountain Trekking - Conquer the Peaks",
    price: 129.99,
    rating: 4.7,
    image: hiking,
  },
  {
    id: "3",
    title: "Pottery Class - Create Masterpieces with Clay",
    price: 89.99,
    rating: 4.3,
    image: pottery,
  },
  {
    id: "4",
    title: "Fishing Expedition - Catch the Big One",
    price: 199.99,
    rating: 4.8,
    image: fishing,
  },
  {
    id: "5",
    title: "Gardening Experience - Grow Your Green Thumb",
    price: 299.99,
    rating: 5.0,
    image: gardening,
  },
  {
    id: "6",
    title: "Sports Day - A Thrill for Every Athlete",
    price: 299.99,
    rating: 5.0,
    image: sports,
  },
  {
    id: "7",
    title: "Baking Class - Master the Art of Pastry",
    price: 299.99,
    rating: 5.0,
    image: baking,
  },
  {
    id: "8",
    title: "Music Class - Learn to Play Like a Pro",
    price: 299.99,
    rating: 5.0,
    image: music,
  },
  {
    id: "9",
    title: "Science Exploration - Fun Experiments for All",
    price: 299.99,
    rating: 5.0,
    image: science,
  },
  {
    id: "10",
    title: "Zoo Tour - A Fun Day with Wildlife",
    price: 299.99,
    rating: 5.0,
    image: zoo,
  },
];

export const locations: Location[] = [
  {
    id: "1",
    title: "Manila",
    km: 0,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0qJmYpyk7QBZct7OZNs8J49-8gz6y7vvso9MGafXCC-klbL9MPbqRFLe72qaU2vQ4kNHC83D6S2M3isHXv8yuTyAk9gSRuIO-NfCquRL3LO35y3jBwhY7WPNwAsZ0HBZ6q1R-cAU7vUEs/s1600/P1180985.JPG", // Manila Image
  },
  {
    id: "2",
    title: "Quezon City",
    km: 15.2,
    image:
      "https://gttp.images.tshiftcdn.com/223805/x/0/quezon-city-diliman-quezon-memorial-circle-shutterstock-1309166275.jpg?ar=1.91%3A1&w=1200&fit=crop", // Quezon City Image
  },
  {
    id: "3",
    title: "Tagaytay",
    km: 56.3,
    image:
      "https://x2s9t6w3.rocketcdn.me/wp-content/uploads/2022/04/taal-volcano-1.jpg", // Tagaytay Image
  },
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderNav />

      <View className="px-4 mt-3 mb-1 bg-white">
        <Text className="text-[25px] font-bold">Hello, Juan!</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <Image
          source={banner}
          className="w-full h-48 rounded-xl mb-2"
          resizeMode="contain"
        />

        <View className="flex-row justify-between items-center px-2">
          <Text className="text-[16px] font-bold">
            Activitist, Hobbyist and Experience
          </Text>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => router.push("../../activity")}
          >
            {/* <Text className="text-[14px] text-blue-500">See all</Text> */}

            {/* <Ionicons name="arrow-forward" size={16} color="#007BFF" /> */}
          </TouchableOpacity>
        </View>
        <CategoryList />

        <View className="flex-row justify-between items-center mt-6 px-2">
          <Text className="text-[16px] font-bold">Trending & Popular</Text>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => router.push("../../activity")}
          >
            <Text className="text-[14px] mr-1">See all</Text>
            <View className="bg-[#059212] p-2 rounded-full">
              <Ionicons name="arrow-forward" size={10} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <TrendingAndPopular
          handleProductClick={handleProductClick}
          products={products}
        />

        <View className="flex-row justify-between items-center mt-6 mb-2 px-2">
          <Text className="text-[16px] font-bold">Nearby discover</Text>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => router.push("./feature/activity")}
          >
            <Text className="text-[14px]  mr-1">See all</Text>
            <View className="bg-[#059212] p-2 rounded-full">
              <Ionicons name="arrow-forward" size={10} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <Nearby handleProductClick={handleProductClick} locations={locations} />

        <View className="flex-row justify-between items-center mt-6 px-2">
          <Text className="text-[16px] font-bold">Recently Viewed</Text>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => router.push("../../activity")}
          >
            <Text className="text-[14px]  mr-1">See all</Text>
            <View className="bg-[#059212] p-2 rounded-full">
              <Ionicons name="arrow-forward" size={10} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <TrendingAndPopular
          handleProductClick={handleProductClick}
          products={products}
        />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView className="flex-1 bg-white">
          {/* Modal Content */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)} // Close the modal
            className="absolute top-10 left-5 z-10 p-2 bg-white rounded-full"
          >
            <Text className="text-blue-500">Close</Text>
          </TouchableOpacity>

          <ScrollView>
            {/* Banner Image */}
            <View className="h-96 bg-gray-200">
              <Image
                source={selectedProduct?.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>

            {/* Product Details */}
            <View className="px-4 py-4">
              <Text className="text-xl font-bold">
                {selectedProduct?.title}
              </Text>
              <Text className="text-md text-green-500 mt-2">
                Php {selectedProduct?.price.toFixed(2)}
              </Text>
              <Text className="text-sm mt-2">
                {selectedProduct?.rating} / 5 Rating
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default Home;
