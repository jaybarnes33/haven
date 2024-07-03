import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const services = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <Text
          className="font-semibold text-lg my-1
  +"
        >
          Suggestions
        </Text>
        <View className="flex-row justify-between space-x-4">
          {[
            { name: "Ride", image: require("@/assets/images/car.png") },
            { name: "Food", image: require("@/assets/images/burger.png") },
            {
              name: "Package",
              image: require("@/assets/images/package.png"),
            },
          ].map((_, i) => (
            <TouchableOpacity className="py-6 rounded-lg flex-1 items-center bg-gray-100">
              <Image className="h-16 w-16 rounded-full" source={_.image} />
              <Text>{_.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default services;
