import { View, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchComp = () => {
  return (
    <View className="mx-4 my-4 p-2 items-center bg-gray-200 rounded-full">
        <Ionicons name="search-outline" color={'gray'} size={30}/>
      <TextInput
        placeholder="Search"
        className=" text-lg font-light"
      ></TextInput>
    </View>
  );
};

export default SearchComp;
