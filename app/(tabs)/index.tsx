import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { useNavigation } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="px-6">
        <Text className="text-3xl font-semibold ">Haven</Text>

        <ScrollView className="space-y-6">
          <View>
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
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    //@ts-ignore
                    navigation.navigate<{ name: string }>({
                      name: _.name.toLowerCase(),
                    })
                  }
                  className="py-6 rounded-lg flex-1 items-center bg-gray-100"
                >
                  <Image className="h-16 w-16 rounded-full" source={_.image} />
                  <Text>{_.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text
              className="font-semibold text-lg my-1
          +"
            >
              Everything you need to live your best life
            </Text>
            <ScrollView horizontal className="h-[220px]">
              {[
                {
                  name: "Laundry",
                  image: require("@/assets/images/laundry.jpg"),
                  description: "Your laundry picked up and delivered",
                },
                {
                  name: "Home Cleaning",
                  image: require("@/assets/images/clean.webp"),
                  description: "Make your home spotless and shiny",
                },
                {
                  name: "Meals",
                  image: require("@/assets/images/home-dish.avif"),
                  description: "Home cooked meals on demand",
                },
              ].map((_, i) => (
                <TouchableOpacity
                  className=" mr-2  w-[220px] space-y-2"
                  key={i}
                >
                  <Image
                    className=" w-full h-[60%] rounded-t-lg object-bottom "
                    source={_.image}
                  />
                  <View>
                    <Text className=" text-base font-semibold">
                      {_.name} &rarr;
                    </Text>
                    <Text className="text-sm text-gray-500">
                      {_.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View>
            <Text
              className="font-semibold text-lg my-1
          +"
            >
              Gifts
            </Text>
            <ScrollView horizontal className="h-[220px] even:bg-gray-600">
              {[
                {
                  name: "Gift Card",
                  image: require("@/assets/images/laundry.jpg"),
                  description: "Surprise your loved ones with a gift card",
                },
                {
                  name: "Home Cleaning",
                  image: require("@/assets/images/clean.webp"),
                  description: "Book a deep clean for your loved ones",
                },
                {
                  name: "Meals",
                  image: require("@/assets/images/home-dish.avif"),
                  description: "Order home cooked meals for your loved ones",
                },
              ].map((_, i) => (
                <TouchableOpacity
                  key={_.name}
                  className={clsx([
                    "rounded-lg mr-2 bg-blue-400  h-32 items-center justify-center p-4   w-1/4 space-y-2",
                    i % 2 == 0 && "bg-yellow-500",
                  ])}
                >
                  <View className="space-y-2">
                    <Text className=" text-base font-semibold">
                      {_.description}
                    </Text>
                    <Text className="text-sm text-gray-800">
                      Get started &rarr;
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
