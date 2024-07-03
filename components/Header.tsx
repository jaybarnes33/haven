import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView className="space-y-4 px-3 mb-3 bg-neutral-50 shadow ">
      <View className="flex-row space-x-2 justify-between items-center">
        <Text className="text-3xl font-bold">Haven</Text>
        <View className="flex-row space-x-2 items-center">
          <Feather name="map-pin" size={14} />
          <Text className="text-sm font-semibold">PO 2/B, Obuasi</Text>
        </View>
      </View>
      <View className="flex-row items-center   py-3 pl-3  border bg-red-50 border-gray-200 rounded-full">
        <Feather name="search" />
        <View className=" text-base pl-3 flex-1">
          <TextInput
            placeholderTextColor={"grey"}
            placeholder=" Hey John, what would you like to eat?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
