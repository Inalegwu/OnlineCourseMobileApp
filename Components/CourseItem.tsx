import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CourseItem({ data, navigation }: any) {
  const [bookMarked, setBookMarked] = useState(false);
  // toggle bookmarked option
  const toggleBookMarked = () => {
    if (bookMarked === false) {
      setBookMarked(true);
    } else {
      setBookMarked(false);
    }
  };
  return (
    <TouchableOpacity
      key={data.id}
      style={tw`p-2 mt-3 rounded-2xl flex flex-row bg-gray-200 border border-gray-200`}
      onPress={() => {
        navigation.navigate("CourseDetails", {
          data: data,
        });
      }}
    >
      {/* Course Image */}
      <View style={tw`w-30 p-3`}>
        <Image
          source={{ uri: data.thumbnail }}
          style={tw`h-25 w-25 rounded-2xl`}
        />
      </View>
      {/* Course Brief Info */}
      <View style={tw`w-46 justify-start mt-6`}>
        {data.discount_flag === true ? (
          <View
            style={tw`p-1 items-center rounded-lg bg-red-200 border-red-800 w-10`}
          >
            <Text style={tw`text-red-800`}>Discount</Text>
          </View>
        ) : null}

        <Text style={tw`font-bold text-4 text-gray-900`}>{data.title}</Text>
        <Text style={tw`font-bold text-red-800`}>{data.price}</Text>
        <Text style={tw`text-gray-700`}>
          {data.short_description.slice(0, 20) + "..."}
        </Text>
      </View>
      {/* Bookmark Course */}
      <TouchableOpacity
        style={tw`p-4 mt-5`}
        onPress={() => {
          toggleBookMarked();
        }}
      >
        {bookMarked === false ? (
          <Ionicons
            name="md-bookmark-outline"
            size={25}
            style={tw`text-red-800`}
          />
        ) : (
          <Ionicons name="md-bookmark" size={25} style={tw`text-red-800`} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
