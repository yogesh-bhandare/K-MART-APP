import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const EventsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="">
        <View className="bg-white h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Events </Text>
        </View>
        <View className="bg-white">
        <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
          <TextInput placeholder="Search" className=" text-lg font-light" />
        </View>
        </View>
        <ScrollView>
        <View className="py-2 bg-white">
          <View className="py-1 border-gray-200 border-t-2 flex flex-row items-center justify-center ">
            <Image
              className="h-20 w-36 rounded-sm"
              source={{
                uri: "https://img.freepik.com/free-photo/image-wheat-field-with-blue-sky_661209-305.jpg?t=st=1712774045~exp=1712777645~hmac=f0f1d4809bd9dd00d40087281c1feb8c60f7426de520b05dbdb9f694291f9abc&w=1060",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" text-base font-semibold">AgriTech 2024</Text>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">22May ~ 24May</Text>
              </View>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">Pune</Text>
              </View>
            </View>
          </View>
          <View className="py-1 border-gray-200 border-t-2 flex flex-row items-center justify-center ">
            <Image
              className="h-20 w-36 rounded-sm"
              source={{
                uri: "https://img.freepik.com/free-photo/image-wheat-field-with-blue-sky_661209-305.jpg?t=st=1712774045~exp=1712777645~hmac=f0f1d4809bd9dd00d40087281c1feb8c60f7426de520b05dbdb9f694291f9abc&w=1060",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" text-base font-semibold">AgriTech 2024</Text>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">22May ~ 24May</Text>
              </View>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">Pune</Text>
              </View>
            </View>
          </View>
          
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EventsScreen;
