import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CuratedItem from "@/components/Card";
import { recipes } from "@/data";
import Popular from "@/components/Popular";
import Header from "@/components/Header";

const food = () => {
  return (
    <>
      <Header />

      <ScrollView className="px-4">
        <View>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-bold text-xl ">Featured Food</Text>
            <Pressable>
              <Text className="text-xs text-red-500">View more</Text>
            </Pressable>
          </View>

          <ScrollView horizontal className="h-[200px]">
            {recipes.map((_, i) => (
              <CuratedItem key={i} recipe={_} />
            ))}
          </ScrollView>
        </View>

        <View>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-bold text-xl ">Order again</Text>
            <Pressable>
              <Text className="text-xs text-red-500">View more</Text>
            </Pressable>
          </View>

          <ScrollView horizontal className="h-[200px]">
            {recipes.map((_, i) => (
              <CuratedItem key={i} recipe={_} />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text className="font-bold text-xl">Popular Dishes</Text>

          <ScrollView className="w-full ">
            {recipes.map((_, i) => (
              <Popular recipe={_} key={i} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default food;
