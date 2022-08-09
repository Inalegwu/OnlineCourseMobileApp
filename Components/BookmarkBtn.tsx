import { TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";

interface Bookmark {
  style?: object;
  onPress?: void;
  iconName?: string;
  size?: Number;
}

export default function BookmarkBtn({
  style,
  onPress,
  iconName,
  size,
}: Bookmark) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={iconName} size={size} style={tw`text-red-800`} />
    </TouchableOpacity>
  );
}
