import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";

export default function TopNavigation({ backLocation }) {
  return (
    <View style={tw`flex flex-row m-2`}>
      <TouchableOpacity
        style={tw`m-1`}
        onPress={() => {
          navigation.navigate({ backLocation });
        }}
      >
        <Feather name="arrow-left" size={25} style={tw`text-red-800`} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
