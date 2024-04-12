import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GovtSchemeComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="py-2 border-2 bg-white border-gray-100  ">
        <View className="">
        <View className="px-4 py-2">
            <Text className="text-lg font-semibold">Government Schemes</Text>
        </View>
      <View className="py-2">
            <View className="py-1  flex flex-row items-center justify-center ">
              <Image
                className="h-20 w-36 rounded-sm"
                source={{
                  uri: "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww",
                }}
              />
              <Text className="py-2 px-2 w-[55%]">Pradhan Mantri Fasal Bima Yojana (PMFBY).</Text>
            </View>
            <View className=" py-1  flex flex-row items-center justify-center ">
              <Image
                className="h-20 w-36 rounded-sm"
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1682092055821-6f31d8edb895?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
              <Text className="py-2 px-2 w-[55%]">Modified Interest Subvention Scheme (MISS).</Text>
            </View>
            </View>

        <TouchableOpacity className="flex items-center justify-center" onPress={() => navigation.navigate("GovernmentSchemes")}>
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View All Schemes
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

export default GovtSchemeComponent;