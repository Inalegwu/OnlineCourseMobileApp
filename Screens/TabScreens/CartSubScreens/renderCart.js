import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

export default function RenderCart() {
  return (
    <View style={tw`p-4 mt-6`}>
      <View style={tw`items-center content-center mt-5`}>
        <Text style={tw`font-bold text-2xl text-gray-800`}>My Cart</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
