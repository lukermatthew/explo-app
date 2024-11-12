import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <Text>Sign up</Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
