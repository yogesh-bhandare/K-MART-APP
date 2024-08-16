import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const SellScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white flex-1">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <Text className="text-lg font-semibold">Sell Crop</Text>
        </View>
        {/* Your main content can go here */}
      </View>
      <Footer className="absolute bottom-0" />
    </SafeAreaView>
  );
};

export default SellScreen;
