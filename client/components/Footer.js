import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getIconColor = (screenName) => {
    return route.name === screenName ? "green" : "black";
  };

  const getTextColor = (screenName) => {
    return route.name === screenName ? "text-green-600" : "text-black";
  };

  return (
    <View className="flex flex-row justify-center items-center">
      <View className=" h-16 w-[95%]  py-3 absolute bottom-3  rounded-3xl shadow-lg shadow-black  bg-white   ">
        <View className="flex flex-row justify-evenly h-16 py-2 absolute inset-x-0 bottom-0">
          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Ionicons
              name="home-outline"
              size={30}
              color={getIconColor("HomeScreen")}
            />
            <Text className={`text-xs ${getTextColor("HomeScreen")}`}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("MandiScreen")}
          >
            <Ionicons
              name="stats-chart-outline"
              size={30}
              color={getIconColor("MandiScreen")}
            />
            <Text className={`text-xs ${getTextColor("MandiScreen")}`}>
              Mandi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("SellScreen")}
          >
            <Ionicons
              name="add-outline"
              size={30}
              color={getIconColor("SellScreen")}
            />
            <Text className={`text-xs ${getTextColor("SellScreen")}`}>
              Post
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("CropDoctorHome")}
          >
            <Ionicons
              name="cart-outline"
              size={30}
              color={getIconColor("CropDoctorHome")}
            />
            <Text className={`text-xs ${getTextColor("CropDoctorHome")}`}>
              Buy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("MoreScreen")}
          >
            <Ionicons
              name="reorder-four"
              size={30}
              color={getIconColor("MoreScreen")}
            />
            <Text className={`text-xs ${getTextColor("MoreScreen")}`}>
              More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
