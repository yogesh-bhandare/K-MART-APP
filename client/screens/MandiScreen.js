import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Ionicons from "@expo/vector-icons/Ionicons";

function MandiScreen() {
  const navigation = useNavigation();

  const [cropList, setCropList] = useState([
    {
      id: 1,
      name: 'Carrot',
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
      name: 'Onion',
      imgURI:
        "https://img.freepik.com/free-photo/onion_144627-27528.jpg?t=st=1708783059~exp=1708786659~hmac=7a858e8054b6b077e3ef16ad0f7026408ec28071ac268364203367ed38f9e041&w=740",
    },
    {
      id: 4,
      name: 'Carrot',
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
      name: 'Carrot',
      imgURI:
        "https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?t=st=1708781899~exp=1708785499~hmac=5ef0cd8f666bc958a7bff8e070cf199979764a4403c1b811a9d90da02a0ee8bf&w=740",
    },
  ]);

  const [marketNearby, setMarketNearby] = useState([
    {
      id: 1,
      name: "Khed",
      distance: "33 km",
      priceTodayWithData: "100 - 150",
      priceRange: "21 Feb ~ 10kg",
    },
    {
      id: 2,
      name: "Wai",
      distance: "25 km",
      priceTodayWithData: "120 - 170",
      priceRange: "20 Feb ~ 9kg",
    },
    {
      id: 3,
      name: "Junar",
      distance: "40 km",
      priceTodayWithData: "90 - 140",
      priceRange: "19 Feb ~ 8kg",
    },
    {
      id: 4,
      name: "Satara",
      distance: "15 km",
      priceTodayWithData: "130 - 180",
      priceRange: "22 Feb ~ 11kg",
    },
    {
      id: 5,
      name: "Pimpri",
      distance: "60 km",
      priceTodayWithData: "110 - 160",
      priceRange: "18 Feb ~ 7kg",
    },
  ]);

  const renderCards = ({ item }) => (
    <View className="w-24 h-24 flex flex-col justify-center items-center ">
      <Image
        source={{
          uri: item.imgURI,
        }}
        className="h-14 w-14"
      ></Image>
      <Text>{item.name}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View className="border-b-2 border-gray-200 pb-3">
      <View className=" flex flex-row justify-between">
        <View className="pl-4 pt-2">
          <Text className="text-xl font-semibold">{item.name}</Text>
          <Text className="text-base text-gray-600 pb-4">{item.distance}</Text>
          <TouchableOpacity className="bg-green-500 w-20 h-8 flex justify-center items-center">
            <Text className=" text-lg font-semibold text-white">Follow</Text>
          </TouchableOpacity>
        </View>
        <View className="pr-4 pt-2">
          <Text className="text-xl font-semibold">
            {item.priceTodayWithData}
          </Text>
          <Text className="text-base text-gray-600 pb-4">
            {item.priceRange}
          </Text>
          <TouchableOpacity className="w-32 h-8 flex justify-center items-center">
            <Text className=" text-lg font-semibold text-green-500">
              Previous Price
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-white">
      <View className=" px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl font-semibold">Mandi</Text>
          <Text className="text-xl font-semibold text-green-500 pl-2">
            Share
          </Text>
        </View>
      </View>
      <View className="px-2 py-2">
        <View className=" flex flex-row justify-between">
          <FlatList
            data={cropList}
            renderItem={renderCards}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View className="w-24 h-24 flex flex-col justify-center items-center border-l-2 border-gray-200 ">
            <TouchableOpacity className="bg-green-500 w-10 h-10 rounded-full flex flex-row justify-center items-center">
              <Ionicons name="add" color={"#fff"} size={30} />
            </TouchableOpacity>
            <Text className=" text-xs pt-1 text-center">Add/Remove crop</Text>
          </View>
        </View>
      </View>
      <View className="py-1 bg-gray-200"></View>
      <View className=" max-h-[68vh]">
        <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
          <TextInput
            placeholder="Search"
            className=" text-lg font-light"
          ></TextInput>
        </View>
        <View className="flex flex-row items-center pl-4 ">
          <Text className="text-xl font-semibold">37 Mandi</Text>
          <Text className="text-xl font-semibold text-green-500 pl-2">
            Within 200 km
          </Text>
        </View>
        <View className="flex flex-row justify-evenly border-b-2 h-14 border-gray-200">
          <View className="px-2 py-2">
            <TouchableOpacity className="h-8 lex items-center justify-center rounded-full w-44 bg-slate-200 border-2 border-gray-300">
              <Text className="font-medium text-sm ">Sort by Distance</Text>
            </TouchableOpacity>
          </View>
          <View className="px-2 py-2">
            <TouchableOpacity className="h-8 lex items-center justify-center rounded-full w-40 bg-slate-200 border-2 border-gray-300">
              <Text className="font-medium text-sm">Sort by Price</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={marketNearby}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default MandiScreen;
