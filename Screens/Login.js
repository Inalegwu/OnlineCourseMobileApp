import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Input from "../Components/Input";

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={tw`p-9`}>
          <View style={tw`mt-1 w-100`}>
            <TouchableOpacity
              style={tw`p-1 mt-4`}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Feather name="arrow-left" size={20} style={tw`text-red-800`} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={[tw`h-65 w-80 mt-3`, styles.image]}
              source={require("../assets/images/3.png")}
            />
          </View>
          <Text style={tw`w-50 font-bold text-5xl mt-5`}>Welcome Back</Text>
        </View>
        <View style={tw`p-3 m-2 mt--2`}>
          <Input
            style={tw`p-5 bg-gray-200 mt-2 rounded-xl`}
            placeholder="Email"
            autoFocus={true}
          />
          <Input
            style={tw`p-5 bg-gray-200 mt-2 rounded-xl`}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={tw`p-3`}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            <Text style={tw`text-red-800 mt-1`}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-4 mt-3 rounded-xl bg-red-800 w-90 items-center content-center`}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={[tw`text-lg font-bold`, { color: "white" }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex ml-20 flex-row p-5 w-100 items-center content-center`}
        >
          <Text>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateAccount");
            }}
          >
            <Text style={[tw`ml-2`, { color: "#8D161A" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
