import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white ">
      <Text className={"text-green-500 text-lg font-semibold"}>
        Welcome to Expo and Native Wind!.
      </Text>
      <StatusBar />
    </SafeAreaView>
  );
}
