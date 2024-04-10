import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CompleteProfile = () => {
    const navigation = useNavigation();
  return (
    <View className="h-[12vh] bg-green-100 border-b-2 border-gray-100 flex flex-row justify-center items-center">
      <View className="px-4 w-full">
        <TouchableOpacity
          className="flex flex-row items-center justify-between"
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <View className="flex flex-row items-center justify-center px-2">
            <Image
              className="h-20 w-14 rounded-md"
              source={{
                uri: "https://img.freepik.com/free-vector/hand-holding-phone-with-facebook-notifications_23-2147816141.jpg?t=st=1709021993~exp=1709025593~hmac=c7318c496a4a4e2d58addfb862b20d84faf16e527048a9898be7d46c231aca8a&w=740",
              }}
            />
            <View>
            <Text className="text-base font-light px-3">Want to unlock personalized app experience?</Text>
            <Text className=" text-base text-green-600 px-3 font-semibold ">Complete your Profile now</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={22} color={"#013220"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteProfile;
