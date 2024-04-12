import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const InviteFreindComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="my-3 bg-blue-200 px-4 py-2 flex-row justify-between items-center">
      <View className="w-[60%]">
        <Text className=" text-base font-semibold">
            Invite Friend
        </Text>
        <Text className="py-2 text-sm">
          Help your farmer friends by inviting them to K-Mart
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("InviteFriendScreen")}
          className="my-1 h-12 w-40  rounded-lg bg-blue-400 flex flex-row justify-center items-center"
        >
          <Text className="text-center text-xm px-1 font-semibold text-white">
            Invite A Friend
          </Text>
          <Ionicons name="chevron-forward" size={18} color={"#ffff"} />
        </TouchableOpacity>
      </View>
      <View className="mx-2">
        <View>
          <Image
            className=" h-32 w-32 rounded-full"
            source={{
              uri: "https://img.freepik.com/free-vector/flat-farmer-s-day-celebration-illustration_23-2149835101.jpg?t=st=1712779661~exp=1712783261~hmac=6a37369ff23d0e7d0485591eb7f80c61c00e59951c062e466b05f10780e10f0e&w=740",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default InviteFreindComponent;
