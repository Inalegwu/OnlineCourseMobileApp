import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface SearchResultType {
  data?: string;
  visible?: boolean;
}

export default function SearchResultBody({ data, visible }: SearchResultType) {
  if (visible === true) {
    return (
      <View style={tw`p-3 bg-gray-200 mt-2 rounded-lg h-100`}>
        <View>
          <TouchableOpacity
            style={tw`p-3 h-10 bg-gray-300 w-10 items-center justify-center rounded-full`}
            onPress={() => {
              visible = false;
            }}
          >
            <FontAwesome name="close" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
}

const styles = StyleSheet.create({});
