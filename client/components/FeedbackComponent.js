import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const FeedbackComponent = () => {
  const [ratings, setRatings] = useState([false, false, false, false, false]);

  const handleStarPress = (index) => {
    const newRatings = [...ratings];
    for (let i = 0; i < newRatings.length; i++) {
      newRatings[i] = i <= index;
    }
    setRatings(newRatings);
  };

  return (
    <View className=" mb-28 bg-white h-[22vh] px-4 py-4 flex-row justify-between items-center">
      <View className="w-[60%]">
        <Text className=" text-base font-semibold">
          How would you rate K-Mart App?
        </Text>
        <Text className="py-2 text-sm">
          We'd love to hear your feedback so that we can serve you better
        </Text>
        <View className="flex flex-row items-center justify-center">
          {ratings.map((pressed, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
              className="my-1 flex flex-row justify-center items-center"
            >
              <View className="px-1">
                <Ionicons
                  name="star"
                  size={30}
                  color={pressed ? "#FFD700" : "#808080"}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="mx-2">
        <View>
          <Image
            className=" h-32 w-24 rounded-md"
            source={{
              uri: "https://img.freepik.com/free-vector/hand-holding-phone-with-facebook-notifications_23-2147816141.jpg?t=st=1709021993~exp=1709025593~hmac=c7318c496a4a4e2d58addfb862b20d84faf16e527048a9898be7d46c231aca8a&w=740",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FeedbackComponent;
