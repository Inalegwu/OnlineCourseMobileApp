import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CourseItem({ data }) {
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
      style={tw`p-3 mt-3 rounded-lg flex flex-row bg-gray-200`}
    >
      {/* Course Image */}
      <View style={tw`w-27 p-3`}>
        <Image
          source={{ uri: data.thumbnail }}
          style={tw`h-20 w-20 rounded-lg`}
        />
      </View>
      {/* Course Brief Info */}
      <View style={tw`w-50 justify-start mt-4`}>
        {data.discount_flag === true ? (
          <View
            style={tw`p-1 items-center rounded-lg bg-red-200 border-red-800 w-10`}
          >
            <Text style={tw`font-sm text-red-800`}>Discount</Text>
          </View>
        ) : null}

        <Text style={tw`font-bold text-base text-gray-900`}>{data.title}</Text>
        <Text style={tw`text-red-800`}>{data.price}</Text>
        <Text style={tw`font-sm text-gray-700`}>
          {data.short_description.slice(0, 30) + "..."}
        </Text>
      </View>
      {/* Bookmark Course */}
      <TouchableOpacity
        style={tw`p-4 mt-2`}
        onPress={() => {
          toggleBookMarked();
        }}
      >
        {bookMarked === false ? (
          <Ionicons
            name="md-bookmark-outline"
            size={20}
            style={tw`text-red-800`}
          />
        ) : (
          <Ionicons name="md-bookmark" size={20} style={tw`text-red-800`} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
