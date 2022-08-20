import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

// TODO implement payments with stripe js. and maybe look into flutterwave implementation with marcus...
export default function PaymentScreen() {
  return (
    <View style={tw`p-3 mt-2`}>
      <Text style={tw`font-bold text-lg text-gray-200`}>PaymentScreen</Text>
    </View>
  );
}
