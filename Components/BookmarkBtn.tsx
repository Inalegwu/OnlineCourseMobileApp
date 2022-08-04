import { TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";

export default function BookmarkBtn({ style, onPress, iconName, size }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={iconName} size={size} style={tw`text-red-800`} />
    </TouchableOpacity>
  );
}
