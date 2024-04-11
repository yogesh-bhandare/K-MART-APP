import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";

const WhatsAppComponent = () => {
  const showAlert = () => {
    Alert.alert(
      "Alert",
      "Exciting Update Under Construction!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className="h-[9vh] my-3 rounded-lg shadow-lg shadow-black mx-4 bg-white border-b-2 border-gray-100 flex flex-row justify-center items-center">
      <View className="px-4 w-full flex flex-row ">
          <View className="flex flex-row items-center justify-center px-2">
            <Image
              className="h-8 w-8 rounded-md"
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-42-189793.png?f=webp&w=512",
              }}
            />
            <View>
              <Text className="text-lg px-2">Get WhatsApp Updates</Text>
            </View>
          </View>
        <TouchableOpacity
          className="flex flex-row items-center justify-between bg-green-500 rounded-md"
          onPress={showAlert}
        >
          <Text className="text-white px-2 text-base font-semibold">Turn On</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsAppComponent;
