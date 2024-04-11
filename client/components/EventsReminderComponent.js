import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EventsReminderComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="h-[41vh] my-3 border-2 bg-white border-gray-100  ">
      <View className="">
        <View className="px-4 py-2">
          <Text className="text-lg font-semibold">Events Reminder</Text>
        </View>
        <View className="py-2">
          <View className="py-1  flex flex-row items-center justify-center ">
            <Image
              className="h-20 w-36 rounded-sm"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3n6ag4K-xg7BVj42zawCsIpxzinUEiP_vnWR6bXQhA&s",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" text-base font-semibold">AgriTech 2024</Text>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">22May ~ 24May</Text>
              </View>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">Pune</Text>
              </View>
            </View>
          </View>
          <View className="py-1  flex flex-row items-center justify-center ">
            <Image
              className="h-20 w-36 rounded-sm"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyQZwexDulXbCEufZUTdXYgHL8GVjvq1CxW2PywjpOQ&s",
              }}
            />
            <View className="py-2 px-2 w-[55%]">
              <Text className=" text-base font-semibold">Kisan Fair</Text>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">2May ~ 12May</Text>
              </View>
              <View className="py-1 flex flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={"rgb(34, 197, 94)"}
                />
                <Text className="px-1 text-base">Pune</Text>
              </View>
            </View>
          </View>
          
        </View>

        <TouchableOpacity
          className="flex items-center justify-center"
          onPress={() => navigation.navigate("Events")}
        >
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View All Events
            </Text>
            <Ionicons
              name="chevron-down"
              size={22}
              color={"rgb(34, 197, 94)"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventsReminderComponent;
