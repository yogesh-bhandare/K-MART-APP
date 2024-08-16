import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const PriceUpdateComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="py-2 my-2 border-2 bg-white border-gray-100  ">
      <View className="px-6 w-full">
        <View className="py-2">
          <Text className="text-lg font-semibold ">Market Prices Update</Text>
        </View>
        <View className="flex flex-row items-center justify-center border-b-2 border-gray-100 py-2">
          <View className="flex flex-row items-center justify-center px-2">
            <Image
              className="h-20 w-20 rounded-md"
              source={{
                uri: "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
              }}
            />
            <View className="w-[64%] pl-6">
              <Text className="text-lg font-medium px-3">CARROT</Text>
              <Text className=" text-base text-blue-500 px-3 font-semibold ">
                ₹80 ~ ₹170/10kg
              </Text>
              <Text className="text-base px-3">Pune</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={22} color={"#013220"} />
        </View>
        <View className="flex flex-row items-center justify-center py-2">
          <View className="flex flex-row items-center justify-center px-2">
            <Image
              className="h-20 w-20 rounded-md"
              source={{
                uri: "https://img.freepik.com/free-vector/corn-cobs-realistic_1284-14091.jpg?w=740",
              }}
            />
            <View className="w-[64%] pl-6">
              <Text className="text-lg font-medium px-3">CORN</Text>
              <Text className=" text-base text-blue-500 px-3 font-semibold ">
                ₹100 ~ ₹150/10kg
              </Text>
              <Text className="text-base px-3">Pune</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={22} color={"#013220"} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MandiScreen")}>
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 py-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View All Markets
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceUpdateComponent;
