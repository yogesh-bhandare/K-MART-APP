import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const WeatherScreen = () => {
  const navigation = useNavigation();

  const [showSearch, toggelSearch] = useState(false);
  const [locations, setLocations] = useState([1,2,3]);

  return (
    <SafeAreaView className="flex flex-1">
      
    </SafeAreaView>
  )
}

export default WeatherScreen