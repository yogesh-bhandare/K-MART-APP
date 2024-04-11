import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddLiveStockComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="h-[24vh] my-3 border-2 bg-white border-gray-100  ">
      <View className="">
        <View className="px-4 py-2">
          <Text className="text-lg font-semibold">Add Livestock</Text>
        </View>
        <View className="px-4 py-2">
          <View className="  flex flex-row items-center justify-center ">
            <Image
              className=" h-20 w-36 rounded-full"
              source={{
                uri: "https://img.freepik.com/free-vector/flat-design-farm-silhouette_23-2150410134.jpg?t=st=1712855039~exp=1712858639~hmac=3a84510701775a3a8e134c2a8c4c7bf4f55eb4f2207bcadd3041ca449531f706&w=1060",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" font-semibold">
                No Livestock details added
              </Text>
              <Text className="text-base">
                Tap below to add your Livestock Details
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="flex items-center justify-center "
          onPress={() => navigation.navigate("CommingSoon")}
        >
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              Add Livestock Details
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddLiveStockComponent;
