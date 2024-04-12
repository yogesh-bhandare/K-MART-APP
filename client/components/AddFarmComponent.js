import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddFarmComponent = () => {
  const navigation = useNavigation();
  return (
    <View className=" bg-white px-4 py-2 flex-row justify-between items-center">
      <View className="w-[60%]">
        <Text className=" text-base font-semibold">
          Have you marked your farm?
        </Text>
        <Text className="py-2 text-sm">
          Locate your farm to get correct weather information and agronomy
          advisory.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MoreScreen")}
          className="my-1 h-12 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center"
        >
          <Text className="text-center text-xm px-1 font-semibold text-white">
            Mark My Farm
          </Text>
          <Ionicons name="chevron-forward" size={18} color={"#ffff"} />
        </TouchableOpacity>
      </View>
      <View className="mx-2">
        <View>
          <Image
            className=" h-36 w-32 rounded-md"
            source={{
              uri: "https://img.freepik.com/premium-photo/threedimensional-map-india-white-background-3d-illustration_874734-124.jpg?w=740",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddFarmComponent;
