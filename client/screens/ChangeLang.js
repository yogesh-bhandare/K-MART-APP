import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function ChangeLang() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white">
      <View>
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-lg text-gray-600 py-2">Select Language</Text>
      </View>
      <View className="h-[80vh] flex flex-row items-center justify-center border-gray-200 border-b-2 border-2 rounded-lg ">
        <View className="flex-1 flex-row items-center justify-center flex-wrap py-3 px-2">
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-28 w-28 shadow-xl border-2 border-green-200 mx-2 my-2">
            <TouchableOpacity className=" flex-1 justify-center items-center ">
              <View className="text-center">
                <Text className="text-green-500 font-bold text-xl">En</Text>
                <Text>English</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="h-[100vh]">
        <View className="p-4 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen1")}
            className=" h-14 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

export default ChangeLang;
