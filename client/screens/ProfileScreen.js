import React, {useState} from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";
import AddMachineComponent from "../components/AddMachineComponent";
import AddLiveStockComponent from "../components/AddLiveStockComponent";
import FarmAddComponent from "../components/FarmAddComponent";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  

  return (
    <SafeAreaView className="bg-gray-100">
      <View className="h-14 px-4 py-2 bg-white flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-lg font-semibold">My Profile</Text>
      </View>
      <View className="h-[82vh]">
        <ScrollView>
          <View>
            <View className="bg-white flex items-center justify-center py-2">
              <Image
                className=" h-24 w-24 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/flat-farmer-s-day-celebration-illustration_23-2149835101.jpg?t=st=1712779661~exp=1712783261~hmac=6a37369ff23d0e7d0485591eb7f80c61c00e59951c062e466b05f10780e10f0e&w=740",
                }}
              />
            </View>
            <View className=" bg-white my-2 px-4">
              <Text className="text-lg font-semibold py-2">About Me</Text>
              <View className="flex items-center justify-center">
                <View className="w-full py-2">
                  <Text className="text-base py-1">First Name</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="Enter Here"
                    className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
                <View className="w-full py-2">
                  <Text className="text-base py-1">Last Name</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="Enter Here"
                    className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
                <View className="w-full py-2 pb-4 border-b-2 border-gray-200">
                  <Text className="text-base py-1">Mobile Number</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="7757997140"
                    className=" pl-4 text-lg bg-gray-100 font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
                {showAdditionalFields && (
                  <View>
                    
                  </View>
                )}
                <TouchableOpacity
                  className="flex items-center justify-center"
                  onPress={() => setShowAdditionalFields(!showAdditionalFields)}
                >
                  <View className=" flex flex-row items-center justify-center  py-2">
                    <Text className="text-green-500 pr-2 font-semibold text-lg">
                      {showAdditionalFields ? 'View Less' : 'View More'}
                    </Text>
                    <Ionicons
                      name={showAdditionalFields ? "chevron-up" : "chevron-down"}
                      size={22}
                      color={"rgb(34, 197, 94)"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <AddMachineComponent/>

              <AddLiveStockComponent/>

              <FarmAddComponent/>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ProfileScreen;
