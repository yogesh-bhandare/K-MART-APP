import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

export default function HomeScreen(){
  const navigation = useNavigation();
    return(
        <SafeAreaView className="bg-white">
       <View className=" px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">Home</Text>
        </View>
      </View>
        <View className="h-[82vh]"></View>
        <Footer/>
      </SafeAreaView>
    )
}

