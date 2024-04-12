import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ExpertArticleComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="py-2 border-2 bg-white border-gray-100  ">
        <View className="">
        <View className="px-4 py-2">
            <Text className="text-lg font-semibold">Expert Articles</Text>
        </View>
      <View className="py-2">
            <View className="  flex flex-row items-center justify-center ">
              <Image
                className="h-20 w-36 rounded-sm"
                source={{
                  uri: "https://img.freepik.com/free-photo/image-wheat-field-with-blue-sky_661209-305.jpg?t=st=1712774045~exp=1712777645~hmac=f0f1d4809bd9dd00d40087281c1feb8c60f7426de520b05dbdb9f694291f9abc&w=1060",
                }}
              />
              <Text className="py-2 px-2 w-[55%]">Wheat is the dominant crop in temperate countries being used for human food and livestock feed.</Text>
            </View>
            </View>

        <TouchableOpacity className="flex items-center justify-center" onPress={() => navigation.navigate("ExpertArticlesScreen")}>
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View All Articles
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

export default ExpertArticleComponent;