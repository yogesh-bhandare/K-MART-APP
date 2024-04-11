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

const GovernmentSchemesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="bg-white">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Government Schemes</Text>
        </View>
        <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
          <TextInput placeholder="Search" className=" text-lg font-light" />
        </View>
        <ScrollView>
          <View className="h-[13vh] border-2 bg-white border-gray-100  ">
              <View className="py-2">
                <View className="  flex flex-row items-center justify-center ">
                  <Image
                    className="h-20 w-36 rounded-sm"
                    source={{
                      uri: "https://img.freepik.com/free-photo/image-wheat-field-with-blue-sky_661209-305.jpg?t=st=1712774045~exp=1712777645~hmac=f0f1d4809bd9dd00d40087281c1feb8c60f7426de520b05dbdb9f694291f9abc&w=1060",
                    }}
                  />
                  <View className="px-2 w-[55%]">
                  <Text className=" font-semibold">
                    Wheat is the dominant crop.
                  </Text>
                  <Text>
                    18 Feb 2024
                  </Text>
                  </View>
                </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GovernmentSchemesScreen;
