import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="h-full w-full">
      <Image
        className="pl-4 h-full w-full"
        source={require('./images/SplashScreen-3.png')}
      />
    </View>
  );
};

export default SplashScreen;
