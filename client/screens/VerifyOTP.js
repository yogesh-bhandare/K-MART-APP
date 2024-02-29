import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

function VerifyOTP() {
  const navigation = useNavigation();
  const route = useRoute();
  const [verifyOTP, setVerifyOTP] = useState('');
  const phoneNumber = route.params.phoneNumber;

  const handleOTPChange = (value) => {
    const formattedValue = value.replace(/\D/g, '');
    setVerifyOTP(formattedValue);
  };

  const handleSubmit = () => {
    if (verifyOTP.length === 6) {
      const hardcodedOTP = '123456'; 
      if (verifyOTP === hardcodedOTP) {
        navigation.navigate('HomeScreen');
      } else {
        alert('Invalid OTP. Please enter the correct OTP.');
      }
    } else {
      alert('OTP must be 6 digits long.');
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("VerifyNumScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
            <Text className=" text-lg font-normal text-gray-500 py-2">SMS Verification</Text>
      </View>
      <View className="h-[80vh] border-gray-200 border-b-2 ">
        <View className="p-4 pb-2">
          <Text className=" text-base font-normal text-gray-500">
            OTP sent via sms on
          </Text>
          <View className="flex flex-row items-center pt-1 ">
            <Text className="text-xl font-semibold">{phoneNumber}</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('VerifyNumScreen')}>
            <Text className="text-base font-bold text-green-500 pl-2">
              Change
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-4 py-4">
          <TextInput
            keyboardType='numeric' value={verifyOTP} onChangeText={handleOTPChange}
            placeholder="Enter 6 digit OTP here"
            className=" px-4 py-2 text-lg font-light h-18 border-gray-200 border-2 rounded-md"
          ></TextInput>
        </View>
        <View className="px-4">
        <TouchableOpacity onPress={() => alert('Resend OTP')}>
            <Text>Resend OTP</Text>
          </TouchableOpacity>
            <Text className="text-sm font-normal text-gray-500">Didn't receive the OTP? Please check your network or check the number you have added</Text>
        </View>
      </View>
      <View className="h-[100vh]">
        <View className="p-4 ">
          <TouchableOpacity onPress={handleSubmit} className=" h-14 rounded-lg bg-green-500 flex justify-center items-center">
            <Text className="text-center text-lg font-semibold text-white">
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default VerifyOTP;
