import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

export default function OnBoard({ navigation }: any) {
  return (
    <View style={tw`p-5 m-5 mt-6 content-center items-center`}>
      <Image
        style={[tw`h-140 w-100`, { resizeMode: "contain" }]}
        source={require("../assets/images/3.png")}
      />
      <Text style={tw`w-80 font-extrabold text-3xl`}>
        Welcome to the E-Limi Learning Platform
      </Text>
      <View style={tw`mt-7`}>
        <TouchableOpacity
          style={tw`p-5 w-85 rounded-2xl bg-red-800 items-center`}
          onPress={() => {
            navigation.navigate("Login", { previous_screen: "OnBoard Screen" });
          }}
        >
          <Text style={[tw`font-bold text-lg`, { color: "white" }]}>
            Login With Email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row content-center p-3 mt-3 items-center`}>
        <Text>Don't Have An Account ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateAccount", {
              previous_screen: "Onboard",
              data: {},
            });
          }}
        >
          <Text style={tw`text-red-800 font-bold`}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
