import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";
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
      name: "Carrot",
      imgURI:
        "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
    },
    {
      id: 5,
      name: "Carrot",
      imgURI:
        "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
    },
    {
      id: 6,
      name: "Carrot",
      imgURI:
        "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
    },
  ]);

  const [selectedCrops, setSelectedCrops] = useState([]);

  const handleCropSelection = (crop) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((selectedCrop) => selectedCrop !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const renderCropItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCropSelection(item)}>
      <View className={`flex items-center border m-1 p-2 rounded-md ${selectedCrops.includes(item) ? 'border-green-500' : 'border-gray-200'}`}>
        <Image source={{ uri: item.imgURI }} className="rounded-full h-20 w-20" />
        <Text className="text-center">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View className="bg-white h-[91%]">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Manage Crops</Text>
        </View>
        <View className="w-[70%] mx-4 border-gray-200 border-b-2 py-2">
          <Text className="text-xl font-semibold">Pick the crops you are interested in</Text>
        </View>
        <View className="flex items-center flex-wrap">
          {selectedCrops.map((crop) => (
            <View key={crop.id} className="bg-green-500 text-white m-1 p-2 rounded-md">
              <Text>{crop.name}</Text>
              <TouchableOpacity onPress={() => handleCropSelection(crop)}>
                <Ionicons name="close-circle" size={16} color="white" />
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
      <Footer />
    </SafeAreaView>
  );
};

export default ManageCrops;