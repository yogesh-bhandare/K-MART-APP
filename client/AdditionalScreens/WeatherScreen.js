import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons";

const WeatherScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-sm text-gray-600">Wheather</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default WeatherScreen