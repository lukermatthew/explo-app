import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="community" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
