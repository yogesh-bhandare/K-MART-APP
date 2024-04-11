import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyServicesComp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="px-4 py-5">
        <Text className="text-xl font-semibold">My Services</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="qr-code-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">
              Verify Bayer Products
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CropDoctorScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="medkit-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">Crop Doctor</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="people-circle-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">
              K-Mart Partners
            </Text>
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

export default MyServicesComp;
