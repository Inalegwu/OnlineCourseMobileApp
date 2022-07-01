import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import Input from "../Components/Input";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={tw`mt-10 p-4`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          {/* navigation */}
          <View style={tw`flex flex-row m-2`}>
            <TouchableOpacity
              style={tw`m-1`}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Feather name="arrow-left" size={25} style={tw`text-red-800`} />
            </TouchableOpacity>
            <Text style={tw`font-bold text-lg ml-2`}>Forgot Password</Text>
          </View>
          {/* body*/}
          <View style={tw`p-3 mt-2 m-2`}>
            <Text style={tw`ml-2 text-2xl w-20 font-bold text-red-800`}>
              Your Email
            </Text>
            <Input
              placeholder="Email"
              style={tw`p-5 mt-8 bg-gray-200 rounded-lg`}
            />
            <TouchableOpacity
              style={tw`ml-2 mt-4`}
              onPress={() => {
                console.log("Well Too Bad For You");
              }}
            >
              <Text style={tw`text-red-800`}>I don't remember my email</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
