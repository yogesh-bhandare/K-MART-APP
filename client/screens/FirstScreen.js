import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function FirstScreen() {
  const navigation = useNavigation();

  const sendSelectionToBackend = async (user) => {
    try {
      const response = await fetch('http://192.168.211.7:8000/user_type/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_type: user }),
      });

      if (!response.ok) {
        throw new Error('Failed to send selection to backend');
      }

      
    } catch (error) {
      console.error('Error sending selection to backend:', error);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
        <View className=" px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">Select</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LangScreen')} className="px-0.5 flex flex-row items-center justify-center bg-white border-2 border-gray-200 h-10 rounded-md ">
                <Ionicons name="language-outline" size={16} color={'rgb(34, 197, 94)'}/>
                <Text className=" text-center text-xs p-1 text-green-500">Change Language</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View className="p-4">
            <Text className="text-xl font-medium mb-1">On K-Mart What will you do ?</Text>
            <Text className="text-l font-medium mb-1">Select any one of the profile</Text>
        </View>
        <View className="flex-1 flex-col justify-center max-h-96 ">
            <TouchableOpacity onPress={() => {sendSelectionToBackend('Retailer'), navigation.navigate('VerifyNumScreen');}} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View  className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Agri Input Retailing</Text>
                    <Text className="text-l font-medium mb-1">For Agri retailers and Agri consultants</Text>
                </View>
                <View>
                    {/* <Image source={""} className="h-6" /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {sendSelectionToBackend('Farmer'), navigation.navigate('VerifyNumScreen');}} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Farming</Text>
                    <Text className="text-l font-medium mb-1">For each and every farmer</Text>
                </View>
                <View>
                    {/* <Image source={""} className="h-6" /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {sendSelectionToBackend('Trader'), navigation.navigate('VerifyNumScreen');}} className=" shadow-md border-solid border-green-300 border-2 flex-1 flex-row justify-between rounded-md bg-white px-2 mb-2 m-4">
                <View className="flex-1 flex-col justify-center">
                    <Text className="text-xl font-medium mb-1">Agri Trading</Text>
                    <Text className="text-l font-medium mb-1">For Traders, Market agents and others</Text>
                </View>
                <View>
                    {/* <Image source={""} className="h-6" /> */}
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default FirstScreen;
