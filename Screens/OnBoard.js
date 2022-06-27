import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

export default function OnBoard({ navigation }) {
  return (
    <View style={tw`p-5 mt-6 content-center items-center`}>
      <Image
        style={[tw`h-80 w-100`, { resizeMode: "contain" }]}
        source={require("../assets/images/3.png")}
      />
      <Text style={tw`w-80 font-extrabold text-3xl`}>
        Welcome to the E-Limi Learning Platform
      </Text>
      <View style={tw`w-90 mt-5`}>
        <View style={tw`p-8 w-90 rounded-2xl mt-2 flex flex-row bg-gray-200`}>
          <View style={tw`mr-5 p-2`}>
            <FontAwesome name="google" />
          </View>
          <Text style={tw`text-sm mt-1 font-bold`}>Login With Google</Text>
        </View>
        <View style={tw`p-8 w-90 rounded-2xl mt-2 flex flex-row bg-gray-200`}>
          <View style={tw`mr-5 p-2`}>
            <FontAwesome name="facebook" />
          </View>
          <Text style={tw`text-sm mt-1 font-bold`}>Login With Facebook</Text>
        </View>
      </View>
      <Text style={tw`text-sm font-bold mt-3`}>or</Text>
      <View style={tw`mt-7`}>
        <TouchableOpacity
          style={tw`p-5 w-90 rounded-2xl bg-red-800 items-center`}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={[tw`font-bold text-lg`, { color: "white" }]}>
            Login With Email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row content-center p-3 mt-3 items-center`}>
        <Text>Don't have and account ? </Text>
        <TouchableOpacity>
          <Text style={tw`text-red-800 font-bold`}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
