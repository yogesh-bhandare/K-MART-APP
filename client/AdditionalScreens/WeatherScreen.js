import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const WeatherScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>WeatherScreen</Text>
    </View>
  )
}

export default WeatherScreen