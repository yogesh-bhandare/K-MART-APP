import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className=" bg-gray-50 relative h-20">
      <View className="flex flex-row justify-evenly py-2 h-20 absolute inset-x-0 bottom-0 ">
        <TouchableOpacity className="flex items-center" onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="home-outline" size={30} />
          <Text className="text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center" onPress={() => navigation.navigate("MandiScreen")}>
          <Ionicons name="stats-chart-outline" size={30} />
          <Text className="text-xs">Mandi</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center" onPress={() => navigation.navigate("CropDoctorHome")}>
          <Ionicons name="camera-outline" size={30} />
          <Text className="text-xs">Crop Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center" onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="reorder-four" size={30} />
          <Text className="text-xs">More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;


