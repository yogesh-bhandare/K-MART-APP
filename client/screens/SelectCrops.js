import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const ManageCrops = () => {
  const navigation = useNavigation();

  const [crops, setCrops] = useState([
    {
      id: 1,
      name: "Carrot",
      imgURI:
        "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
    },
    {
      id: 2,
      name: "Corn",
      imgURI:
        "https://img.freepik.com/free-vector/corn-cobs-realistic_1284-14091.jpg?w=740",
    },
    {
      id: 3,
      name: "Onion",
      imgURI:
        "https://img.freepik.com/free-photo/onion_144627-27528.jpg?t=st=1708783059~exp=1708786659~hmac=7a858e8054b6b077e3ef16ad0f7026408ec28071ac268364203367ed38f9e041&w=740",
    },
    {
      id: 4,
      name: "Tomato",
      imgURI:
        "https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?t=st=1712984168~exp=1712987768~hmac=7cbba18620b0369c695dd8b10d662514d34b911d3104e9d1e3f79b45b42ba6df&w=826",
    },
    {
      id: 5,
      name: "Potato",
      imgURI:
        "https://img.freepik.com/free-photo/potato-table_144627-14824.jpg?t=st=1712984242~exp=1712987842~hmac=fecc089de8d68606bb016237ce5f3b9e2318338ec433f891ca16a98089921e9a&w=740",
    },
    {
      id: 6,
      name: "Wheat",
      imgURI:
        "https://img.freepik.com/free-vector/realistic-wheat-composition_1284-22993.jpg?t=st=1712984296~exp=1712987896~hmac=321abf5b37d0e5c8b192e568945f5a567b27747e0d90a138ce91e71d45d5f1c9&w=740",
    },
  ]);

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
    <TouchableOpacity onPress={() => handleCropSelection(item)}>
      <View
        className={`flex items-center border m-1 p-2 rounded-md ${
          selectedCrops.includes(item) ? "border-green-500" : "border-gray-200"
        }`}
      >
        <Image
          source={{ uri: item.imgURI }}
          className="rounded-full h-20 w-20"
        />
        <Text className="text-center">{item.name}</Text>
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
          <Image source={{ uri: crop.imgURI }} className="rounded-full h-16 w-16" />
          <Text className="text-center text-white">{crop.name}</Text>
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
