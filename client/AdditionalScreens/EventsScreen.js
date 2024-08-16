import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import api from "../api";

const EventsScreen = () => {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);

  const getArticleData = () => {
  api.get('/content/events/')
  .then((response) => setEvents(response.data))
  .catch((error) => console.log("This is error: ",error))
  }

  useEffect(() => {
    getArticleData()
  }, [])

  return (
    <SafeAreaView>
      <View className="">
        <View className="bg-white h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Events </Text>
        </View>
        <View className="bg-white">
        <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
          <TextInput placeholder="Search" className=" text-lg font-light" />
        </View>
        </View>
        <ScrollView>
          {events.map((event) => (
        <View key={event.id} className="py-2 bg-white">
          <View className="py-1 border-gray-200 border-t-2 flex flex-row items-center justify-center ">
            <Image
              className="h-20 w-36 rounded-sm"
              source={{
                uri: `${event.image}`,
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" text-base font-semibold">{event.name}</Text>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">{event.date}</Text>
              </View>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">{event.location}</Text>
              </View>
            </View>
          </View>
        </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EventsScreen;
