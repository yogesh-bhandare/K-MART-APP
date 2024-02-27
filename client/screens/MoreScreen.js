import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";
import CompleteProfile from "../components/CompleteProfile";
import QuickLinkComp from "../components/QuickLinkComp";
import MyServicesComp from "../components/MyServicesComp";
import MyAccountComp from "../components/MyAccountComp";
import FeedBackComp from "../components/FeedBackComp";

function MoreScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">More</Text>
        </View>
      </View>
      <View className="h-[82vh]">
        <ScrollView>
          <View className="p-4 h-24 flex flex-row justify-start items-center">
            <View className="h-20 w-20 rounded-full bg-green-300">
              {/* <Image source={{uri: ''}}></Image> */}
            </View>
            <View className="pl-4">
              <Text className="text-base">Yogesh Bhandare</Text>
              <TouchableOpacity
                className="flex flex-row justify-start items-center"
                onPress={() => navigation.navigate("ProfileScreen")}
              >
                <Ionicons
                  name="pencil-outline"
                  size={16}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="text-green-500 font-bold px-0.5">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <CompleteProfile />
          <View className="h-2 bg-gray-200"></View>
          <QuickLinkComp />
          <View className="h-2 bg-gray-200"></View>
          <MyServicesComp />
          <View className="h-2 bg-gray-200"></View>
          <MyAccountComp />
          <View className="h-2 bg-gray-200"></View>
          <FeedBackComp />
          <View className="h-24 bg-gray-200" />
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default MoreScreen;
