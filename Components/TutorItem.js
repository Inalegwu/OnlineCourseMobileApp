import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function TutorItem({ name, artistry, image }) {
  return (
    <TouchableOpacity style={tw`m-2`}>
      <Image source={image} style={tw`p-10 h-5 w-5 rounded-full bg-gray-500`} />
      <Text style={tw`w-20 text-center text-xs font-bold mt-1 text-gray-500`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
