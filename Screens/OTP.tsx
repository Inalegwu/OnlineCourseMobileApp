import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Input from "../Components/Input";

export default function OTP({ navigation }) {
  return (
    <View style={tw`p-5 mt-10`}>
      <Text style={tw`m-10 font-bold text-xl text-left`}>
        Enter The One Time Password Sent Your Email
      </Text>
      <View style={tw`w-90 flex flex-row mt-4 justify-evenly`}>
        <Input
          secureTextEntry={true}
          style={tw`bg-gray-200 text-2xl font-bold text-center p-4 rounded-lg`}
        />
        <Input
          secureTextEntry={true}
          style={tw`bg-gray-200 text-2xl font-bold text-center p-4 rounded-lg`}
        />
        <Input
          secureTextEntry={true}
          style={tw`bg-gray-200 text-2xl font-bold text-center p-4 rounded-lg`}
        />
        <Input
          secureTextEntry={true}
          style={tw`bg-gray-200 text-2xl font-bold text-center p-4 rounded-lg`}
        />
      </View>
      <TouchableOpacity
        style={tw`p-5 rounded-xl bg-red-800 text-center m-5 mt-11`}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={tw`font-bold text-white text-center text-sm`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
