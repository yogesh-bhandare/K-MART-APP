import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons"
import Footer from "../components/Footer";

const CropDoctorScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="bg-gray-200 h-[91%]">
      <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-sm text-gray-600">Crop Doctor</Text>
      </View>
        <View className=" h-40 bg-green-300 px-4 py-2 flex-row justify-between items-center">
          <View className="w-[60%]">
            <Text className="py-2 text-sm">
              Submit Picture and get solutions for your crops
            </Text>
            <TouchableOpacity className="h-8 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center">
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
        <View className="h-14 px-4 py-2 flex justify-center">
          <Text className="font-semibold">My Queries</Text>
        </View>
        <View className="h-44 px-6 text-center bg-white flex justify-center items-center">
          <Text className="font-semibold text-xs">No crop problem yet</Text>
          <Text className="text-gray-400 text-center text-xs">
            use 'Take a picture' button to raise a new problem
          </Text>
        </View>
      </View>
      <Footer/>
    </SafeAreaView>
  );
};

export default CropDoctorScreen;
