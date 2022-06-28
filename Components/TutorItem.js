import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function TutorItem({ name, artistry, image }) {
  return (
    <View style={tw`m-2`}>
      <Image
        source={image}
        style={tw`p-10 h-10 w-10 rounded-full bg-gray-500`}
      />
      <Text style={tw`w-20 text-center text-xs font-bold mt-1 text-gray-800`}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
