import { Tabs } from "expo-router";

export default function CoreLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 0,
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="my-booking" />
      <Tabs.Screen name="inbox" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
