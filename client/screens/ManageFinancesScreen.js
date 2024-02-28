import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

function ManageFinancesScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white">
      <View className=" px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">Manage Finances</Text>
        </View>
      </View>
      <View className="h-[82vh]"></View>
      <Footer />
    </SafeAreaView>
  );
}

export default ManageFinancesScreen;
