import Product from "@/components/Product";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { products } from "..";

const ActivityScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-2 bg-white">
        <TouchableOpacity onPress={() => router.push("/")}>
          <FontAwesome name="arrow-left" size={20} color="#999" />
        </TouchableOpacity>

        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for activities, hobbies"
          placeholderTextColor="#aaa"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            paddingVertical: 10,
            paddingLeft: 10,
            fontSize: 16,
            color: "#333",
            borderWidth: 0.5,
            borderColor: isFocused ? "green" : "",
            borderRadius: 50,
            marginLeft: 10,
          }}
        />

        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome
            name="shopping-cart"
            size={20}
            color="#999"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View className=" m-4">
          <Text className="text-[16px] font-bold">Trending & Popular</Text>
        </View>

        <View className="w-full">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((product) => (
              <View key={product.id}>
                <Product
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              </View>
            ))}
        </View>
      </ScrollView>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default ActivityScreen;
