import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

export default function RenderInbox({ navigation }: any) {
  return (
    <View style={tw`mt-10 p-3`}>
      <Text>RenderInbox</Text>
    </View>
  );
}
