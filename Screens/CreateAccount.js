import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Input from "../Components/Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";

export default function CreateAccount({ navigation }) {
  const [image, setImage] = useState("../assets/images/avatar.png");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={tw`p-1`}>
        <View style={tw`flex flex-row m-2 mt-10 ml-4`}>
          <TouchableOpacity
            style={tw`m-1`}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Feather
              name="arrow-left"
              size={25}
              style={tw`text-red-800 font-bold`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`p-4`}>
          <Text style={tw`font-extrabold text-5xl w-50 mt-2 ml-3`}>
            Create account
          </Text>
          <View style={tw`p-4 m-1 items-center content-center`}>
            <View style={tw`mt-2 rounded-full`}>
              <Image
                source={require("../assets/images/avatar.png")}
                style={tw`h-36 w-36`}
              />
              <TouchableOpacity
                onPress={pickImage}
                style={tw`absolute p-6 inset-x-22 inset-y-23 bg-red-800 rounded-full items-center content-center`}
              >
                <FontAwesome5
                  name="camera"
                  style={tw`text-white absolute top-3 left-3`}
                  size={22}
                />
              </TouchableOpacity>
            </View>
            <Input
              placeholder="First Name"
              autofocus={true}
              style={tw`p-4 w-90 mt-7 bg-gray-200 rounded-xl`}
            />
            <Input
              placeholder="Last Name"
              style={tw`p-4 w-90 mt-5 bg-gray-200 rounded-xl`}
            />
            <Input
              placeholder="Email"
              style={tw`p-4 w-90 mt-5 bg-gray-200 rounded-xl`}
            />
            <Input
              placeholder="Password"
              style={tw`p-4 w-90 mt-5 bg-gray-200 rounded-xl`}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={tw`p-4 w-90 bg-red-800 mt-7 rounded-lg items-center content-center`}
            >
              <Text style={tw`font-bold text-lg text-white`}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`w-100 items-center content-center flex flex-row`}>
            <Text style={tw`ml-20`}>Already have and account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={tw`text-red-800 font-bold`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
