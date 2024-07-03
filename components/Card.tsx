import { View, Text, Image } from "react-native";
import React from "react";
import { recipes } from "@/data";
import { Feather } from "@expo/vector-icons";
import Ratings from "./Ratings";
const CuratedItem = ({ recipe }: { recipe: (typeof recipes)[0] }) => {
  return (
    <View className="mr-3 shadow bg-white   h-44 rounded-lg">
      <View className="h-2/4">
        <Image
          source={{ uri: recipe.image }}
          className="w-full h-full rounded-t-lg"
        />
      </View>
      <View className="p-2 gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold">{recipe.name}</Text>
        </View>
        <View className="flex-row justify-between">
          <View className="flex-row gap-1 items-center">
            <Feather size={12} name="clock" color={"grey"} />
            <Text className="text-xs text-gray-400">{recipe.time}</Text>
          </View>
          <View className="flex-row gap-1 items-center mb-2">
            <Feather name="users" color={"grey"} />
            <Text className="text-xs text-gray-400">{recipe.servings}</Text>
          </View>
        </View>
        <Ratings rating={recipe.ratings} />
      </View>
    </View>
  );
};

export default CuratedItem;
