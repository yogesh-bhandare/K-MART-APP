import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"; // Import Alert
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Yup from "yup";
import { useEffect } from "react";
import * as Location from "expo-location";



function SignIn() {
  // const navigation = useNavigation();

  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [mpin, setMpin] = useState("");

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);

  // const requestLocationPermission = async () => {
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status === "granted") {
  //     setLocationPermission(true);
  //   } else {
  //     setLocationPermission(false);
  //   }
  // };

  // const handlePhoneNumberChange = (value) => {
  //   const formattedValue = value.replace(/\D/g, "").slice(0, 10);
  //   setPhoneNumber(formattedValue);
  // };

  // const handleMpinChange = (value) => {
  //   const formattedValue = value.replace(/\D/g, "").slice(0, 4);
  //   setMpin(formattedValue);
  // };

  // const handleSubmit = async () => {
  //   try {
  //     if (!phoneNumber || phoneNumber.length !== 10) {
  //       throw new Error('Invalid Phone Number');
  //     }

  //     if (!mpin || mpin.length !== 4) {
  //       throw new Error('Invalid MPIN');
  //     }

  //     const response = await fetch('http://192.168.43.249:8000/signin/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ phone_number: phoneNumber, password: mpin }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to send data to backend');
  //     }

  //     navigation.navigate('Screen1');
  //   } catch (error) {
  //     console.error('Error sending data to backend:', error);
  //     Alert.alert(
  //       'Error',
  //       error.message || 'Failed to send data to backend. Please try again later.',
  //     );
  //   }
  // };

  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpin, setMpin] = useState("");

  const handleSubmit = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Phone number must be 10 digits');
      return;
    }

    if (!mpin || mpin.length !== 4) {
      Alert.alert('Invalid MPIN', 'MPIN must be 4 digits');
      return;
    }

    try {
      const response = await fetch('http://192.168.43.249:8000/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phonenumber: phoneNumber,
          password: mpin,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Error', 'Invalid input please check again !');
    }
  };

  

  return (
    <SafeAreaView className="bg-white">
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        
        <Text className=" text-lg font-bold text-gray-500 py-2">
          K-Mart
        </Text>
      </View>
      <View className="h-[80vh] border-gray-200 border-b-2 ">
        <View className="p-4 pb-2 pt-5">
          <Text className="text-2xl font-normal">
            Sign in to
          </Text>
          <Text className="text-2xl font-bold">
            Your Account !
          </Text>
        </View>
        <View className="p-4 pb-2 mt-10 flex flex-row items-center justify-center ">
          <Text className="text-lg font-normal">
            Welcome
          </Text>
        </View>
        
        <View className="py-2 px-4">
        <TextInput
          placeholder="Enter Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          className="pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
        ></TextInput>
      </View>
      <View className="py-2 px-4">
        <TextInput
          keyboardType="numeric"
          value={mpin}
          onChangeText={setMpin}
          secureTextEntry={true}
          placeholder="Enter 4 digit security MPIN"
          className="pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
        ></TextInput>
      </View>
        <View className=" p-4 flex flex-row items-center justify-center">
          <View className="flex flex-row">
          <Text className="text-gray-700 text-base">Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('VerifyOTPScreen')}>
            <Text className="text-green-500 font-semibold text-base">
            Sign Up
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="h-[100vh]">
      <View className="p-4">
          <TouchableOpacity
            onPress={handleSubmit}
            className="h-14 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Sign in with MPIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
