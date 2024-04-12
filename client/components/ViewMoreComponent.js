import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ViewMoreComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="py-2 border-2 bg-white border-gray-100  ">
      <View className="px-4 w-full">
        <View className="flex flex-row items-center justify-evenly py-4">
          <TouchableOpacity onPress={() => navigation.navigate("CommingSoon")}>
            <View className="flex items-center justify-center">
              <Image
                className="h-16 w-16 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/qr-code-qr-generator-online-qr-code-reading-warehouse-modern-technology-automated-inventory-management-systems-product-information_335657-4525.jpg?w=740",
                }}
              />
              <Text className="py-2">Verify Bayer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CropDoctorScreen")}
          >
            <View className="flex items-center justify-center">
              <Image
                className="h-16 w-16 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/medical-treatment-tools-composition_1284-16379.jpg?t=st=1712772254~exp=1712775854~hmac=ff4d5efff5e7f8444186c7bd8d6cee6205bc33a7dbbfcd4c2721580e18285be3&w=740",
                }}
              />
              <Text className="py-2">Crop Doctor</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("News")}>
            <View className="flex items-center justify-center">
              <Image
                className="h-16 w-16 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-20706.jpg?w=740",
                }}
              />
              <Text className="py-2">News</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ExpertArticlesScreen")}>
            <View className="flex items-center justify-center">
              <Image
                className="h-16 w-16 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg?t=st=1712772373~exp=1712775973~hmac=b3b53517bc5cbba8e2a3133b985f7e9fbcc67745978a0e5b6258808e23dadcf1&w=740",
                }}
              />
              <Text className="py-2">Expert Article</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <View className=" flex flex-row items-center justify-center border-t-2 border-gray-100 pt-2">
            <Text className="text-green-500 pr-2 font-semibold text-lg">
              View More
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

export default ViewMoreComponent;