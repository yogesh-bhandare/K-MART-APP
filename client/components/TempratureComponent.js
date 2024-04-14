import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const TempratureComponent = () => {
    const navigation = useNavigation();
  return (
    <View className="h-[10vh] my-2 bg-white border-2 border-gray-100 flex flex-row justify-center items-center">
      <View className="px-4 w-full">
        
          <View className="flex flex-row items-center justify-between">

          <View className="flex flex-row items-center justify-center px-2">
            <View>
            <Text className=" text-base  font-semibold">Today, Shivajinager</Text>
            <Text className=" text-base text-gray-600 ">Excessive Heat</Text>
            </View>
            
          </View>
          <View>
                <Text className=" text-4xl font-light pl-16">34°</Text>
            </View>
            <Image
              className="h-14 w-14 rounded-full"
              source={{
                uri: "https://img.freepik.com/free-vector/sun-clouds_23-2147511485.jpg?w=740",
              }}
            />
          </View>
      </View>
    </View>
  )
}

export default TempratureComponent