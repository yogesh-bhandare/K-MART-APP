import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CommingSoonScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View className="bg-white flex items-center justify-center">
        <View className="w-[80%] h-full flex items-center justify-center">
          <View className="flex items-center justify-center">
            <Text className="text-lg font-semibold py-1">Exciting Update Under Construction!</Text>
          </View>
          <View className="w-full py-3">
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            className=" h-14 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Go Back
            </Text>
          </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default CommingSoonScreen