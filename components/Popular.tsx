import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { recipes } from "@/data";
import { Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Ratings from "./Ratings";
const Popular = ({ recipe }: { recipe: (typeof recipes)[0] }) => {
  return (
    <View className="flex-row  shadow bg-white   h-28 my-3 rounded-lg">
      <View className=" w-2/5 col-span-5">
        <Image
          source={{ uri: recipe.image }}
          className="w-full h-full rounded-l-lg"
        />
      </View>
      <View className="p-2 gap-1 flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-base">{recipe.name}</Text>
        </View>
        <View className="flex-row space-x-3 items-center">
          <View className="flex-row gap-1 items-center">
            <Feather size={12} name="clock" color={"grey"} />
            <Text className="text-xs text-gray-400">{recipe.time}</Text>
          </View>

          <View className="border-l border-gray-300 pl-3 flex-row gap-1 items-center">
            <Feather size={12} name="users" color={"grey"} />
            <Text className="text-xs text-gray-400">
              {recipe.servings} servings
            </Text>
          </View>
        </View>
        <Ratings rating={recipe.ratings} />
        <View className="items-end -top-2">
          <Pressable className="flex-row space-x-2 items-center">
            <Text className="text-red-600 text-xs">View Details</Text>
            <FontAwesome6 name="arrow-right-long" size={11} color="red" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Popular;
