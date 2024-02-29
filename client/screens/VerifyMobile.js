import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"; // Import Alert
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

function VerifyMobile() {
  const navigation = useNavigation();

  const NumberLength = Yup.object().shape({
    NumberLength: Yup.number()
      .min(10, "Invalid Number")
      .max(10, "Invalid Number")
      .required("Enter Phone Number"),
  });
  const [locationPermission, setLocationPermission] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setLocationPermission(true);
    } else {
      setLocationPermission(false);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    setPhoneNumber(formattedValue);
  };

  const handleSubmit = () => {
    if (phoneNumber.length === 10) {
      if (!locationPermission) {
        Alert.alert(
          'Location Permission Required',
          'Please grant location permission to proceed.',
          [{ text: 'OK', onPress: () => requestLocationPermission() }],
        );
      } else {
        navigation.navigate('VerifyOTPScreen', { phoneNumber });
      }
    } else {
      alert('Phone number must be 10 digits long.');
    }
  };
  

  return (
    <SafeAreaView className="bg-white">
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-lg font-normal text-gray-500 py-2">
          Verify your Mobile Number
        </Text>
      </View>
      <View className="h-[80vh] border-gray-200 border-b-2 ">
        <View className="p-4 pb-2 pt-5">
          <Text className="text-xl font-semibold">
            We will send an SMS to verify your mobile number.{" "}
          </Text>
        </View>
        <View className="p-4">
          <TextInput
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            placeholder="Enter Phone Number"
            className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
          ></TextInput>
        </View>
      </View>
      <View className="h-[100vh]">
        <View className="p-4 ">
          <TouchableOpacity
            onPress={handleSubmit}
            className=" h-14 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default VerifyMobile;
