import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="home-filled"
              size={25}
              color={!focused ? color : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="food"
              size={25}
              color={!focused ? color : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="laundry"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="washing-machine"
              size={25}
              color={!focused ? color : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="person"
              size={25}
              color={!focused ? color : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
