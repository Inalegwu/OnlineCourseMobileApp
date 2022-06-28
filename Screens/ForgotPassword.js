import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={tw`mt-10 p-4`}>
      <View style={tw`flex flex-row m-2`}>
        <TouchableOpacity
          style={tw`m-1`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={25} style={tw`text-red-800`} />
        </TouchableOpacity>
        <Text style={tw`font-bold text-lg ml-2`}>Forgot Password</Text>
      </View>
    </View>
  );
}
