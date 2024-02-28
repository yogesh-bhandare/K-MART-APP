import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../components/Footer";

const MyOrders = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <View className="bg-white h-[91%]">
          <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
            <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
              <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
            </TouchableOpacity>
            <Text className=" text-sm text-gray-600">My Orders</Text>
          </View>
          <View className=" h-[84vh]" >
            <View className="flex-1 flex-col items-center justify-center">
              <Image className="h-40 w-40" source={{uri: "https://img.freepik.com/free-vector/flat-worried-woman-have-list-credit-debts-overdue-bills-girl-reading-letter-from-collection-agency-about-financial-problems-loans-unpaid-tax-calculation-payment-expenses-concept_88138-805.jpg?t=st=1709132574~exp=1709136174~hmac=0a66686914b963c3f3dafb98f376d59b3b35b4cd58f097ed77d5f7148bc19d63&w=996"}} />
              <Text className="text-lg font-bold">No Orders</Text>
              <Text className="font-light">Looks like there are no orders yet!</Text>
            </View>
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    );
}

export default MyOrders