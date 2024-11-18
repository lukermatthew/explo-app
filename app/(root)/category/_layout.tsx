import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="categoryList" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
