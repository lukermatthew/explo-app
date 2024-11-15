import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

const DealScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text>DealScreen</Text>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default DealScreen;
