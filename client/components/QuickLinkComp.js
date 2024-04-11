import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const QuickLinkComp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="p-4 ">
        <Text className="text-xl font-semibold">Quick Links</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CommingScreen")}>
        <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start items-center">
            <Ionicons name="partly-sunny-outline" size={20} />
            <Text className=" px-2 text-base text-gray-500">Weather</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={"rgb(34, 197, 94)"}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('News')}>
      <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center">
          <Ionicons name="newspaper-outline" size={20} />
          <Text className=" px-2 text-base text-gray-500">News</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={"rgb(34, 197, 94)"} />
      </View>
      </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Events')}>
      <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center">
          <Ionicons name="calendar-outline" size={20} />
          <Text className=" px-2 text-base text-gray-500">Events</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={"rgb(34, 197, 94)"} />
      </View>
      </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('GovernmentSchemes')}>
      <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center">
          <Ionicons name="business-outline" size={20} />
          <Text className=" px-2 text-base text-gray-500">
            Government Schemes
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={"rgb(34, 197, 94)"} />
      </View>
      </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('ExpertArticlesScreen')}>
      <View className="px-4 py-2 border-b-2 border-gray-200 flex flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center">
          <Ionicons name="newspaper-outline" size={20} />
          <Text className=" px-2 text-base text-gray-500">Expert Articles</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={"rgb(34, 197, 94)"} />
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default QuickLinkComp;
