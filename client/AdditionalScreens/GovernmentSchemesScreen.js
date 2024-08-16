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

const GovernmentSchemesScreen = () => {
  const navigation = useNavigation();
  const [schemes, setSchemes] = useState([]);

  const getSchemeData = () => {
  api.get('/content/schemes/')
  .then((response)=>setSchemes(response.data))
  .catch((error)=>console.log("Error occured: ",error))
  }

  useEffect(() => {
    getSchemeData()
  }, [])

  return (
    <SafeAreaView>
      <View className="bg-white">
        <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
          <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
            <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
          </TouchableOpacity>
          <Text className=" text-sm text-gray-600">Government Schemes</Text>
        </View>
        <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
          <TextInput placeholder="Search" className=" text-lg font-light" />
        </View>
        <ScrollView>
          {schemes.map((scheme) => (
          <View key={scheme.id} className="h-[13vh] border-2 bg-white border-gray-100  ">
              <View className="py-2">
                <View className="  flex flex-row items-center justify-center ">
                  <Image
                    className="h-20 w-36 rounded-sm"
                    source={{
                      uri: `${scheme.image}`,
                    }}
                  />
                  <View className="px-2 w-[55%]">
                  <Text className=" font-semibold">
                    {scheme.name}
                  </Text>
                  <Text>
                    {scheme.date}
                  </Text>
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

export default GovernmentSchemesScreen;
