import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function FirstScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
        <View className=" px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">Select</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LangScreen')} className="px-0.5 flex flex-row items-center bg-white border-2 border-gray-200 h-8 rounded-md ">
                <Ionicons name="language-outline" size={16}/>
                <Text className=" text-center text-xs p-1">Change Language</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View className="p-4">
            <Text className="text-xl font-medium mb-1">On K-Mart What will you do ?</Text>
            <Text className="text-l font-medium mb-1">Select any one of the profile</Text>
        </View>
        <View className="flex-1 flex-col justify-center max-h-96 ">
            <TouchableOpacity onPress={() => navigation.navigate('VerifyNumScreen')} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Agri Input Retailing</Text>
                    <Text className="text-l font-medium mb-1">For Agri retailers and Agri consultants</Text>
                </View>
                <View>
                    <Image source={""} className="h-6" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('VerifyNumScreen')} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Farming</Text>
                    <Text className="text-l font-medium mb-1">For each and every farmer</Text>
                </View>
                <View>
                    <Image source={""} className="h-6" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('VerifyNumScreen')} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Agri Trading</Text>
                    <Text className="text-l font-medium mb-1">For Traders, Market agents and others</Text>
                </View>
                <View>
                    <Image source={""} className="h-6" />
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default FirstScreen;
