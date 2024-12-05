import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="communityIndex" options={{ headerShown: false }} />
      <Stack.Screen name="communityList" options={{ headerShown: false }} />

      <Stack.Screen name="community/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="community/post/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
