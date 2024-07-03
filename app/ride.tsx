import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const Ride = () => {
  const saved = [
    { name: "Hossey Park" },
    {
      name: "Pomposo Bus Stop",
    },
    {
      name: "Cofkans Hotel",
    },
  ];

  return (
    <SafeAreaView>
      <View className="px-4 pb-4  border-gray-200  border-b-2">
        <Text className="font-semibold text-xl text-center">
          Plan your ride
        </Text>

        <View className="flex-row items-center space-x-2">
          <View className="space-y-2 pt-3 flex-1">
            <TextInput
              className="bg-gray-200 p-2"
              value="10 63 Marsh Orchid St"
            />
            <TextInput className="bg-gray-200 p-2" placeholder="Where to?" />
          </View>
          <TouchableOpacity className="h-10 w-10 rounded-full bg-black justify-center items-center">
            <Text className="text-white text-2xl">+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="bg-neutral-200 space-y-2 min-h-screen py-3 px-4">
        {[...saved, ...saved].map((item) => (
          <View key={item.name} className="flex-row space-x-3 items-center">
            <MaterialCommunityIcons name="map-marker" size={20} />
            <View className="border-neutral-300 border-b flex-1 pb-2">
              <Text>{item.name}</Text>
              <Text className="text-sm text-gray-400 ">Obuasi</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ride;
