import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import api from "../api";

const ManageCrops = () => {
  const navigation = useNavigation();

  const [crops, setCrops] = useState([])

  const fetchCropList = () => {
    api.get("crops/list/")
      .then((response) => setCrops(response.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCropList()
  },[])

  const [selectedCrops, setSelectedCrops] = useState([]);

  const handleCropSelection = (crop) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(
        selectedCrops.filter((selectedCrop) => selectedCrop !== crop)
      );
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const renderCropItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => handleCropSelection(item)}>
      <View
        className={`flex items-center border m-1 p-2 rounded-md ${
          selectedCrops.includes(item) ? "border-green-500" : "border-gray-200"
        }`}
      >
        <Image
          source={{ uri: item.crop_img }}
          className="rounded-full h-20 w-20"
        />
        <Text className="text-center">{item.crop_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View className="bg-white h-[88vh]">
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <Text className=" text-lg font-normal text-gray-500 py-2">
          Select Crops
        </Text>
      </View>
        <View className="border-b border-gray-200">
        <View className="w-[70%] mx-4 py-2">
          <Text className="text-xl font-semibold">
            Pick the crops you are interested in
          </Text>
        </View>
        </View>
        <View className="flex flex-row items-center flex-wrap m-1 px-4">
  {selectedCrops.map((crop) => (
    <View key={crop.id} className="bg-green-500 text-white border border-green-200 m-1 px-2 rounded-md">
      <TouchableOpacity>
        <View className={`flex items-center m-1 p-2 rounded-md`}>
          <Image source={{ uri: crop.crop_img }} className="rounded-full h-16 w-16" />
          <Text className="text-center text-white">{crop.crop_name}</Text>
          <TouchableOpacity onPress={() => handleCropSelection(crop)}>
            <Ionicons name="close-circle" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  ))}
</View>

        <View className="flex items-center">
          <FlatList
            data={crops}
            renderItem={renderCropItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
          />
        </View>
      </View>
      <View className="h-[100vh]">
        <View className="p-4 ">
          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyNumScreen')}
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
};

export default ManageCrops;
