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

  const [marketNearby, setMarketNearby] = useState([
    {
      id: 1,
      name: "Khed",
      distance: "33 km",
      priceTodayWithData: "100 - 150",
      priceRange: "14 April ~ 10kg",
      screenName: "CommingSoon",
    },
    {
      id: 2,
      name: "Wai",
      distance: "25 km",
      priceTodayWithData: "120 - 170",
      priceRange: "14 April ~ 9kg",
      screenName: "CommingSoon",
    },
    {
      id: 3,
      name: "Junnar",
      distance: "40 km",
      priceTodayWithData: "90 - 140",
      priceRange: "14 April ~ 8kg",
      screenName: "CommingSoon",
    },
    {
      id: 4,
      name: "Satara",
      distance: "15 km",
      priceTodayWithData: "130 - 180",
      priceRange: "14 April ~ 11kg",
      screenName: "CommingSoon",
    },
    {
      id: 5,
      name: "Pimpri",
      distance: "12 km",
      priceTodayWithData: "100 - 160",
      priceRange: "13 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 6,
      name: "Sangli",
      distance: "60 km",
      priceTodayWithData: "130 - 190",
      priceRange: "13 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 7,
      name: "Kalyan",
      distance: "110 km",
      priceTodayWithData: "150 - 190",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 8,
      name: "Mumbai",
      distance: "120 km",
      priceTodayWithData: "200 - 260",
      priceRange: "13 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 9,
      name: "Thane",
      distance: "115 km",
      priceTodayWithData: "190 - 250",
      priceRange: "12 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 10,
      name: "Koregaon",
      distance: "70 km",
      priceTodayWithData: "210 - 270",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 11,
      name: "Bhiwandi",
      distance: "80 km",
      priceTodayWithData: "160 - 200",
      priceRange: "13 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 12,
      name: "Ulhasnagar",
      distance: "107 km",
      priceTodayWithData: "90 - 150",
      priceRange: "12 Aprl ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 13,
      name: "Pali",
      distance: "50 km",
      priceTodayWithData: "80 - 160",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 14,
      name: "Dehu",
      distance: "45 km",
      priceTodayWithData: "120 - 160",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 15,
      name: "Alandi",
      distance: "25 km",
      priceTodayWithData: "115 - 150",
      priceRange: "12 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 16,
      name: "Chakan",
      distance: "70 km",
      priceTodayWithData: "180 - 240",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 17,
      name: "Mulshi",
      distance: "75 km",
      priceTodayWithData: "75 - 100",
      priceRange: "14 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 18,
      name: "Aundh",
      distance: "60 km",
      priceTodayWithData: "135 - 160",
      priceRange: "12 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 19,
      name: "Hinjewadi",
      distance: "43 km",
      priceTodayWithData: "145 - 170",
      priceRange: "11 April ~ 7kg",
      screenName: "CommingSoon",
    },
    {
      id: 20,
      name: "Baramati",
      distance: "29 km",
      priceTodayWithData: "90 - 140",
      priceRange: "10 April ~ 7kg",
      screenName: "CommingSoon",
    }
  ]);

  const [pinnedItems, setPinnedItems] = useState([]);

  const [sortBy, setSortBy] = useState(null);

  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleSelectCrop = (crop) => {
    setSelectedCrop(crop);
  
    const randomItems = marketNearby.sort(() => 0.5 - Math.random()).slice(0, 5);
  
    setMarketNearby(randomItems);
  };
  

  const renderCrop = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSelectCrop(item)}
      className={`px-3 py-2  ${
        selectedCrop && selectedCrop.id === item.id
          ? "bg-green-200"
          : "bg-transparent"
      }`}
    >
      <View className="items-center">
        <Image
          source={{ uri: item.imgURI }}
          className="w-16 h-16 rounded-full"
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleListItemPress = (screenName, itemId) => {
    navigation.navigate(screenName, { itemId: itemId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleListItemPress(item.screenName, item.id)}
    >
      <View className="border-b-2 border-gray-200 pb-3">
        <View className="flex flex-row justify-between">
          <View className="pl-4 pt-2">
            <Text className="text-xl font-semibold">{item.name}</Text>
            <Text className="text-base text-gray-600 pb-4">
              {item.distance}
            </Text>
            <TouchableOpacity
              className={`bg-${
                pinnedItems.some((pinnedItem) => pinnedItem.id === item.id)
                  ? "gray"
                  : "green"
              }-500 w-20 h-8 flex justify-center items-center`}
              onPress={() => handlePinItem(item)}
            >
              <Text className="text-lg font-semibold text-white">
                {pinnedItems.some((pinnedItem) => pinnedItem.id === item.id)
                  ? "Unfollow"
                  : "Follow"}
              </Text>
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
              <Text className="text-lg font-semibold text-green-500">
                Previous Price
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handlePinItem = (item) => {
    const index = pinnedItems.findIndex(
      (pinnedItem) => pinnedItem.id === item.id
    );
    if (index === -1) {
      setPinnedItems([item, ...pinnedItems]);
    } else {
      const updatedPinnedItems = [...pinnedItems];
      updatedPinnedItems.splice(index, 1);
      setPinnedItems(updatedPinnedItems);
    }
  };

  const sortByDistance = () => {
    const sortedMarketNearby = [...marketNearby].sort((a, b) => {
      const distanceA = parseFloat(a.distance);
      const distanceB = parseFloat(b.distance);
      return distanceA - distanceB;
    });
    setMarketNearby(sortedMarketNearby);
    setSortBy("distance");
  };

  const sortByPrice = () => {
    const sortedMarketNearby = [...marketNearby].sort((a, b) => {
      const priceA = parseFloat(a.priceTodayWithData.split(" - ")[0]);
      const priceB = parseFloat(b.priceTodayWithData.split(" - ")[0]);
      return priceA - priceB;
    }).reverse();
    setMarketNearby(sortedMarketNearby);
    setSortBy("price");
  };

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
      <View className="px-2">
        <View className=" flex flex-row justify-between">
          <FlatList
            data={crops}
            renderItem={renderCrop}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ManageCropScreen")}
          >
            <View className="w-24 h-24 flex flex-col justify-center items-center border-l-2 border-gray-200 ">
              <TouchableOpacity onPress={() => navigation.navigate("ManageCropScreen")} className="bg-green-500 w-10 h-10 rounded-full flex flex-row justify-center items-center">
                <Ionicons name="add" color={"#fff"} size={30} />
              </TouchableOpacity>
              <Text className=" text-xs pt-1 text-center">Add/Remove crop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="py-1 bg-gray-200"></View>
      <View className=" max-h-[69vh]">
        <View className={`h-${pinnedItems.length * 36}`}>
          <FlatList
            data={pinnedItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
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
            <TouchableOpacity
              className={`h-8 flex items-center justify-center rounded-full w-44 border-2 border-gray-300 bg-${
                sortBy === "distance" ? "green" : "slate"
              }-500`}
              onPress={sortByDistance}
            >
              <Text
                className={`font-medium text-sm text-${
                  sortBy === "distance" ? "white" : "black"
                }`}
              >
                Sort by Distance
              </Text>
            </TouchableOpacity>
          </View>
          <View className="px-2 py-2">
            <TouchableOpacity
              className={`h-8 flex items-center justify-center rounded-full w-40 border-2 border-gray-300 bg-${
                sortBy === "price" ? "green" : "slate"
              }-500`}
              onPress={sortByPrice}
            >
              <Text
                className={`font-medium text-sm text-${
                  sortBy === "price" ? "white" : "black"
                }`}
              >
                Sort by Price
              </Text>
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
