import { View, Text, TouchableOpacity, Image } from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons"



const CropDoctorComponent = () => {
    const navigation = useNavigation()
    return (
            <TouchableOpacity className="my-3" onPress={() => navigation.navigate("CropDoctorScreen")}>
            <View className=" h-[22vh] bg-green-300 px-4 py-3 flex-row justify-between items-center">
              <View className="w-[60%]">
              <Text className=" text-lg font-semibold">Crop Doctor</Text>
                <Text className="py-2 text-sm">
                  Submit Picture and get AI solutions for your crops
                </Text>
                <TouchableOpacity className="my-1 h-8 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center">
                  <Ionicons name="images" size={18} color={'#ffff'} />
                  <Text className="text-center text-xm px-1 font-semibold text-white">
                  Pick from Gallery
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  className="my-1 h-8 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center">
                  <Ionicons name="camera" size={18} color={'#ffff'} />
                  <Text className="text-center text-xm px-1 font-semibold text-white">
                  Take A Picture
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="mx-2">
                <View>
                  <Image className="h-24 w-24 rounded-full" source={{uri: "https://img.freepik.com/free-vector/flat-world-food-safety-day-illustration_23-2149411580.jpg?t=st=1709040785~exp=1709044385~hmac=7fe46730e3ab20a445aa8ec4b2dc6ab481d1a24c7ca2491916272219c55d3f5c&w=740"}}/>
                </View>
              </View>
            </View>
            </TouchableOpacity>
      );
}

export default CropDoctorComponent


