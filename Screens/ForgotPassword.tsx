import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import Input from "../Components/Input";
import { forgotPassword } from "../data/remote/userApiCalls";

interface ResponseType {
  status: boolean;
  data: Object;
  message: string;
}

export default function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (email: string) => {
    setEmail(email);
  };

  const resetPassword = (): void => {
    console.log("resetting password...");
    try {
      forgotPassword(email)
        ?.then(() => {
          setIsLoading(true);
        })
        .then((data: ResponseType) => {
          console.log(data);
          let message = data.message;
          navigation.navigate("Login", {
            previous_screen: "Forgot Password",
            message: message,
          });
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } catch (error: unknown) {
      console.log(error);
    }
  };

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
              secureTextEntry={false}
              autofocus={true}
              style={tw`p-5 mt-8 bg-gray-200 rounded-lg`}
              submit={handleSubmit}
            />
            <TouchableOpacity
              style={tw`ml-2 mt-5`}
              onPress={() => {
                console.log("Well Too Bad For You");
              }}
            >
              <Text style={tw`text-red-800`}>I don't remember my email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                resetPassword();
              }}
              style={tw`p-5 bg-red-800 mt-8 items-center content-center rounded-lg`}
            >
              {isLoading === false ? (
                <Text style={tw`font-bold text-white`}>Recover</Text>
              ) : (
                <ActivityIndicator
                  style={tw`text-center left-2 mt-4`}
                  size="large"
                  color="#8D161A"
                />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
