import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const FeedBackComp = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CommingSoon')}>
      <View className="px-4 py-4">
        <View className="flex flex-row justify-between items-center">
          <View className="w-[70%] flex flex-row justify-start items-center">
            <Image
              className=" h-24 w-16 rounded-lg"
              source={{
                uri: "https://img.freepik.com/free-vector/hand-holding-phone-with-facebook-notifications_23-2147816141.jpg?t=st=1709021993~exp=1709025593~hmac=c7318c496a4a4e2d58addfb862b20d84faf16e527048a9898be7d46c231aca8a&w=740",
              }}
            />
            <View className="px-4">
              <Text>Give FeedBack</Text>
              <Text className=" font-light">
                Tell us what you like about app and how we can improve it
              </Text>
            </View>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeedBackComp;
