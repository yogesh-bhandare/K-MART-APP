import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const FarmAddComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="h-[24vh] border-2 bg-white border-gray-100  ">
      <View className="">
        <View className="px-4 py-2">
          <Text className="text-lg font-semibold">My Farm</Text>
        </View>
        <View className="px-4 py-2">
          <View className="  flex flex-row items-center justify-center ">
            <Image
              className=" h-20 w-36 rounded-full"
              source={{
                uri: "https://img.freepik.com/free-photo/cultivated-field-sunset_1232-860.jpg?t=st=1712855255~exp=1712858855~hmac=03fdfd92aef875a958b36acc233a2872933e3f079cf5bcd0acad492cb6fc9a66&w=1060",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" font-semibold">
                No details added
              </Text>
              <Text className="text-base">
                Tap below to add your farm Details
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
              Locate My Farm
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FarmAddComponent;
