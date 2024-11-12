import HeaderNav from "@/components/HeaderNav";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ImageSlider } from "@pembajak/react-native-image-slider-banner";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderNav />
      <Text className="flex text-[25px] font-bold px-4  bg-white">
        Hello, Matthew!
      </Text>
      <View className="px-4 -top-10">
        <ImageSlider
          data={[
            {
              img: "https://orangemagazine.ph/wp-content/uploads/2024/11/Klook-Philippines-2-1.png",
            },
            {
              img: "https://www.ttrweekly.com/site/wp-content/uploads/2024/10/3.jpg",
            },
            {
              img: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1723517658/yxwxrwgo4fkdscxn2xdd.webp",
            },
          ]}
          autoPlay={false}
          caroselImageStyle={{ resizeMode: "contain" }}
        />
      </View>

      <View className="flex-1 justify-center items-center">
        <Text>Home Screen</Text>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
