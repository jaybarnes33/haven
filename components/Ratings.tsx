import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const Ratings = ({ rating }: { rating: number }) => {
  // Convert the string ratings to a numeric value

  // Round the numeric rating to the nearest half
  const roundedRating = Math.round(rating) / 2;

  // Create an array of five stars based on the rounded rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starClass = index + 0.5 <= roundedRating ? "filled" : "empty";
    return (
      <FontAwesome
        key={index}
        className={`star ${starClass}`}
        name="star"
        color={"orange"}
      />
    );
  });

  return (
    <View className="flex-row my-2 space-x-2  mx-1 items-center">
      <View className="flex-row space-x-[2px]">{stars}</View>
      <Text className="text-xs font-bold text-gray-400">{rating} ratings</Text>
    </View>
  );
};

export default Ratings;
