import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LocationComp from '../components/LocationComp'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from '../components/Footer'

const ChangeLocation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate('MoreScreen')}>
            <Ionicons name='chevron-back' size={22} color={'rgb(75 85 99)'}/>
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Change Location</Text>
        </View>
        <View className="h-[84%]">
        <LocationComp/>
        </View>
        </View>
        <Footer/>
    </SafeAreaView>
  )
}

export default ChangeLocation