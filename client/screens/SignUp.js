import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BASE_URL } from "../config";

function SignUp() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [email, setEmail] = useState("");

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
      const response = await fetch(`${BASE_URL}/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          password: mpin,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigation.navigate('Screen1');

    } catch (error) {
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <View className="h-14 px-4 py-2 bg-white flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("VerifyNumScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-lg font-semibold">K-Mart</Text>
      </View>
      <View className="flex-1 bg-white ">
          <View className=" bg-white my-2">
            <View className=" py-4 px-4 ">
              <Text className="text-2xl font-normal">Create New</Text>
              <Text className="text-2xl font-bold">is fast and easy !</Text>
            </View>
            <View className="py-2 px-4">
              <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                className=" pl-4 text-lg  h-14 border-gray-300 border-2 rounded-md"
              ></TextInput>
            </View>
            <View className="py-2 px-4">
              <TextInput
                placeholder="Mobile No."
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                className=" pl-4 text-lg h-14 border-gray-300 border-2 rounded-md"
              ></TextInput>
            </View>
            <View className="py-2 px-4">
              <TextInput
                placeholder="Set 4 digit security MPIN*"
                keyboardType="numeric"
                value={mpin}
                onChangeText={setMpin}
                secureTextEntry={true}
                className=" pl-4 text-lg h-14 border-gray-300 border-2 rounded-md"
              ></TextInput>
            </View>
            <View className="py-2 px-4">
              <TextInput
                placeholder="Confirm 4 digit security MPIN"
                keyboardType="numeric"
                value={confirmMpin}
                onChangeText={setConfirmMpin}
                secureTextEntry={true}
                className=" pl-4 text-lg h-14 border-gray-300 border-2 rounded-md"
              ></TextInput>
            </View>
            <View className="py-2 px-4">
              <TextInput
                placeholder="Email ID"
                value={email}
                onChangeText={setEmail}
                className=" pl-4 text-lg h-14 border-gray-300 border-2 rounded-md"
              ></TextInput>
            </View>
            <View className="px-4 py-6">
              <TouchableOpacity onPress={handleSubmit} className=" h-14 rounded-lg bg-green-500 flex justify-center items-center">
                <Text className="text-center text-lg font-semibold text-white">
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
            <View className="px-4">
              <TouchableOpacity onPress={() => navigation.navigate('VerifyNumScreen')} className=" h-14 rounded-lg border-green-500 border-2 flex justify-center items-center">
                <View className="flex flex-row">
                <Text className="text-center text-lg  text-gray-500">
                  Already have and account ?
                </Text>
                <Text className=" text-lg pl-1 font-bold text-green-500">
                  Sign In
                </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="my-10 px-4 flex flex-row items-center justify-center">
              <Text className="text-center text-gray-500 text-base">
                By Sigining Up, You agree to K-Mart Terms and Privacy Policy
              </Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
