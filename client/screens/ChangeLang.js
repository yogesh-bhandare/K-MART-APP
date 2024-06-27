import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function ChangeLang() {
  const navigation = useNavigation();

  const [selectedLang, setSelectaang] = useState(false);

  const handleLangPress = (lang) => {
    if (selectedLang === lang){
      setSelectaang(null);
    }else{
      setSelectaang(lang);
    }
  }

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  const sendSelectionToBackend = async () => {
    try {
      const response = await fetch('http://192.168.142.7:8081/language/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language: selectedLang }),
      });

      if (!response.ok) {
        throw new Error('Failed to send selection to backend');
      }

    } catch (error) {
      console.error('Error sending selection to backend:', error);
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <View>
      <View className="h-18 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-lg text-gray-600 py-2">Select Language</Text>
      </View>
      <View className="h-[80vh] flex flex-row items-center justify-center border-gray-200 border-b-2 border-2 rounded-lg ">
        <View className="flex-1 flex-row items-center justify-center flex-wrap py-3 px-2">
        <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => handleLangPress('en')} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'en' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'en' ? 'white' : 'black'}`}>En</Text>
                <Text className={` text-${selectedLang === 'en' ? 'white' : 'black'}`}>English</Text>
            </TouchableOpacity>
            </View>
        <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity  onPress={() => handleLangPress('mr')} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'mr' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'mr' ? 'white' : 'black'}`}>Mr</Text>
                <Text className={` text-${selectedLang === 'mr' ? 'white' : 'black'}`}>नमस्कार</Text>
            </TouchableOpacity>
            </View>
        <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => {handleLangPress('hi'); handleLanguageSelection('Hindi')}} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'hi' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'hi' ? 'white' : 'black'}`}>Hi</Text>
                <Text className={` text-${selectedLang === 'hi' ? 'white' : 'black'}`}>नमस्ते</Text>
            </TouchableOpacity>
            </View>
            <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => {handleLangPress('gu'); handleLanguageSelection('Gujarati')}} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'gu' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'gu' ? 'white' : 'black'}`}>Gu</Text>
                <Text className={` text-${selectedLang === 'gu' ? 'white' : 'black'}`}>નમસ્તે</Text>
            </TouchableOpacity>
            </View>
            <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => handleLangPress('ta')} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'ta' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'ta' ? 'white' : 'black'}`}>Ta</Text>
                <Text className={` text-${selectedLang === 'ta' ? 'white' : 'black'}`}>வணக்கம்</Text>
            </TouchableOpacity>
            </View>
            <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => handleLangPress('te')} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'te' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'te' ? 'white' : 'black'}`}>Te</Text>
                <Text className={` text-${selectedLang === 'te' ? 'white' : 'black'}`}>హలో</Text>
            </TouchableOpacity>
            </View>
            <View onPress={() => handleLanguageSelection()}>
        <TouchableOpacity onPress={() => handleLangPress('ml')} className={`mx-2 my-2 w-24 h-24 rounded-lg  bg-${selectedLang === 'ml' ? 'green' : 'transparent'}-500 border-green-500 border justify-center items-center`} >
                <Text className={` font-bold text-xl text-${selectedLang === 'ml' ? 'white' : 'black'}`}>Ml</Text>
                <Text className={` text-${selectedLang === 'ml' ? 'white' : 'black'}`}>ഹലോ</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="h-[100vh]">
        <View className="p-4 ">
          <TouchableOpacity
            onPress={() => {
              sendSelectionToBackend();
              navigation.navigate("Screen1");}}
            className=" h-14 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Text className="text-center text-lg font-semibold text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChangeLang;
