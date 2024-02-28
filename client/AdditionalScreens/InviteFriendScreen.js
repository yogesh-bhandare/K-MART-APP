import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";

const InviteFriendScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="bg-white h-[91%]">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Invite Friends</Text>
        </View>
        <View className=" h-[84vh]" >
          <View className="flex-1 flex-col items-center justify-center">
            <View className="h-20 w-20 rounded-full bg-green-300">
              {/* <Image source={{uri: ''}}></Image> */}
            </View>
            <Text>Invite friends to FarmRise</Text>
            <View>
              <Text>It's always too much fun with a friend around</Text>
            </View>
            <View className="p-2 w-full ">
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                className=" h-14 rounded-lg bg-green-500 flex justify-center items-center"
              >
                <Text className="text-center text-lg font-semibold text-white">
                  Invite Friends
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default InviteFriendScreen;
