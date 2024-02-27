import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const LocationComp = () => {
  return (
    <View className="px-4 flex flex-row justify-start items-center">
        <Ionicons
          name="location-outline"
          size={32}
          color={"rgb(34, 197, 94)"}
          />
        <View>
        <View className="px-5 py-2">
          <Text className="text-sm">Your default location</Text>
        </View>
        <View className="px-5 py-2">
          <Text className="font-semibold ">Ambegaon Budruk</Text>
          <Text>Katraj, Pune-46</Text>
        </View>
        <View className="px-5 py-4">
          <TouchableOpacity className="py-2 flex items-center rounded-lg border-2 border-green-500 w-44 ">
            <Text className="text-green-500 font-bold">Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationComp;
