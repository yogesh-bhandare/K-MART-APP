import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const NewsComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="h-[37vh] my-3 border-2 bg-white border-gray-100  ">
        <View className="">
        <View className="px-4 py-2">
            <Text className="text-lg font-semibold">News Updates</Text>
        </View>
      <View className="py-2">
            <View className="py-1  flex flex-row items-center justify-center ">
              <Image
                className="h-20 w-36 rounded-sm"
                source={{
                  uri: "https://www.agriculture.com/thmb/EMLbN_R04158Uz6KAjTao58-5Vk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MayWheatRainDrops-1-731120a608ab4b9c8576aeff53d5ff5f.jpg",
                }}
              />
              <Text className="py-2 px-2 w-[55%]">Over half the 2024 winter wheat crop rated good/excellent condition.</Text>
            </View>
            <View className=" py-1  flex flex-row items-center justify-center ">
              <Image
                className="h-20 w-36 rounded-sm"
                source={{
                  uri: "https://www.agriculture.com/thmb/f4B3lV4ciQJmz1HvfCGgMoc_nYA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Temple-Rhodes-IMG_07201-ccdbb7d2dfd74570bec0890a30c08412.jpg",
                }}
              />
              <Text className="py-2 px-2 w-[55%]">Wet start to spring keeps farmers out of field </Text>
            </View>
            </View>

        <TouchableOpacity className="flex items-center justify-center" onPress={() => navigation.navigate("News")}>
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View All News
            </Text>
            <Ionicons
              name="chevron-down"
              size={22}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsComponent;