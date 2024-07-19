import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.142.7:8081/signout/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      navigation.navigate('VerifyNumScreen'); 
    } catch (error) {
      Alert.alert('Error', 'Logout failed. Please try again.');
    }
  };

  // const handleDelete = async () => {
  //   try{
  //     const response = await fetch('http://192.168.43.249:8000/delete/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Deletion failed');
  //     }

  //     navigation.navigate('VerifyNumScreen');
  //   } catch (error) {
  //     Alert.alert('Error', 'Account deletion failed. Please try again.');
  //   }
  // };

  return (
    <SafeAreaView className="bg-white">
      <View>
      <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-sm text-gray-600">Settings</Text>
      </View>
      <View className="h-[84%]">
        <TouchableOpacity onPress={() => navigation.navigate("ChangeLanguageScreen2")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="language-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">
                Change Language
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="notifications-circle-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">
                Notification Prefernces
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="logo-whatsapp" size={20} />
              <Text className=" px-2 text-base text-gray-500">
                WhatsApp Notification
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="reader-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">
                Terms of Service
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="shield-checkmark-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">
                Privacy Policy
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="document-text-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">Licences</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="log-out-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">Sign Out</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleDelete}>
          <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
            <View className="flex flex-row justify-start items-center">
              <Ionicons name="trash-outline" size={20} />
              <Text className=" px-2 text-base text-gray-500">Delete Account</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity> */}
      </View>
      <Footer />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
