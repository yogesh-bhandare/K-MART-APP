import { View, Text, TouchableOpacity, Image } from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons"
import Footer from "../components/Footer";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const CropDoctorScreen = () => {
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please allow access to your media library to pick images.', [{ text: 'OK' }]);
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white flex-1">
      <View className="h-14 px-4 py-2 flex flex-row items-center border-gray-200 border-b-2">
        <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
          <Ionicons name="chevron-back" size={22} color={"rgb(75 85 99)"} />
        </TouchableOpacity>
        <Text className=" text-sm text-gray-600">Crop Doctor</Text>
      </View>
        <View className=" h-40 bg-green-300 px-4 py-2 flex-row justify-between items-center">
          <View className="w-[60%]">
            <Text className="py-2 text-sm">
              Submit Picture and get AI solutions for your crops
            </Text>
            <TouchableOpacity onPress={pickImage} className="my-1 h-8 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center">
              <Ionicons name="images" size={18} color={'#ffff'} />
              <Text className="text-center text-xm px-1 font-semibold text-white">
              Pick from Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={takePhoto} className="my-1 h-8 w-40  rounded-lg bg-green-500 flex flex-row justify-center items-center">
              <Ionicons name="camera" size={18} color={'#ffff'} />
              <Text className="text-center text-xm px-1 font-semibold text-white">
              Take A Picture
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mx-2">
            <View>
              <Image className="h-24 w-24 rounded-full" source={{uri: "https://img.freepik.com/free-vector/flat-world-food-safety-day-illustration_23-2149411580.jpg?t=st=1709040785~exp=1709044385~hmac=7fe46730e3ab20a445aa8ec4b2dc6ab481d1a24c7ca2491916272219c55d3f5c&w=740"}}/>
            </View>
          </View>
        </View>
        <View className="h-14 px-4 py-2 flex justify-center">
          <Text className="font-semibold">My Queries</Text>
        </View>
        <View className="h-44 px-6 text-center bg-gray-200 flex justify-center items-center">
          <Text className="font-semibold text-xs">No crop problem yet</Text>
          <Text className="text-gray-400 text-center text-xs">
            use 'Take a picture' button to raise a new problem
          </Text>
        </View>
      </View>
      <Footer/>
    </SafeAreaView>
  );
};

export default CropDoctorScreen;
