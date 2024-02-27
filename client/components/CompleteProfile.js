import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CompleteProfile = () => {
    const navigation = useNavigation();
  return (
    <View className="h-12 bg-green-200 border-b-2 border-gray-200 flex flex-row justify-center items-center">
      <View className="px-4 w-full">
        <TouchableOpacity
          className="flex flex-row items-center justify-between"
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <View className="flex flex-row items-center justify-center px-2">
            <Image
              className="h-8 w-8 rounded-full"
              source={{
                uri: "https://img.freepik.com/free-vector/dotted-background-with-hands-using-mobile-phone_23-2147607957.jpg?t=st=1709018097~exp=1709021697~hmac=df5b4b36993ef8adfbe1227221d35b3a6e2c5144a469ce1ee3d6c6dc2335240a&w=740",
              }}
            />
            <Text className="text-base px-3">Complete your profile now</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={"#013220"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteProfile;
