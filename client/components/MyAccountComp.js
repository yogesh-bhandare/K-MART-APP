import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MyAccountComp = () => {
    const navigation = useNavigation();
  return (
    <View>
      <View className="p-4 ">
        <Text className="text-xl font-semibold">My Account</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("LocationScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="location-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">
              Change Location
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LocationScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="leaf-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">Manage Crop</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LocationScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="cart-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">My Orders</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LocationScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="chatbox-ellipses-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">
              Invite Friends
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SettingScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="settings-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">Settings</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyAccountComp;
