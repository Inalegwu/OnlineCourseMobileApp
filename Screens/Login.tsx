// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 070 8096 8858
// Company : Cstemp Edutech
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Input from "../Components/Input";
import { login } from "../data/remote/userApiCalls";
import { NetworkContext } from "../Components/ContextProvider";

interface APITypes {
  fetchedEmail: string;
  fetchedPassword: string;
}

export default function Login({ navigation, route }: any) {
  const [fetchedEmail, setEmail] = useState<string>();
  const [fetchedPassword, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [storedToken, setStoredToken] = useState<string>();
  const data = React.useContext(NetworkContext);
  const { previous_screen, previous_data, message } = route.params;

  const submitPassword = (password: string) => {
    setPassword(password);
  };
  const submitEmail = (email: string) => {
    setEmail(email);
  };

  // ! TODO implement async storage to persist the users logged in state

  const authenticate = () => {
    console.log("Authenticating...");
    if (fetchedEmail === undefined && fetchedPassword === undefined) {
      Alert.alert("Login Error", "Can't Login Without an Email or Password");
    } else {
      login(fetchedEmail, fetchedPassword)
        ?.then((data: any) => {
          console.log(data);
          setIsLoading(true);
          if (data.data.validity == 1) {
            console.log(data.data);
            console.log("Setting token...");
            navigation.navigate("Home", { data: data.data });
            setIsLoading(false);
          } else {
            console.log(data.data);
            alert("Invalid Username or Password");
          }
        })
        .catch((error: unknown) => {
          alert(error);
          setIsLoading(true);
        });
    }
  };
  return (
    <>
      <NetworkContext.Provider value={data}>
        <>
          {console.log(
            "Previous Screen: " + previous_screen,
            "Data : " + previous_data
          )}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <>
              <ScrollView>
                <View style={tw`p-9`}>
                  <View style={tw`mt-1 w-100`}>
                    <TouchableOpacity
                      style={tw`p-1 mt-4`}
                      onPress={() => {
                        navigation.goBack();
                      }}
                    >
                      <Feather
                        name="arrow-left"
                        size={20}
                        style={tw`text-red-800`}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image
                      style={[tw`h-65 w-80 mt-3`, styles.image]}
                      source={require("../assets/images/3.png")}
                    />
                  </View>
                  <Text style={tw`w-50 font-bold text-4xl mt-2`}>
                    Welcome Back
                  </Text>
                </View>
                <View style={tw`p-3 m-2`}>
                  <Input
                    style={tw`p-4 bg-gray-200 rounded-xl`}
                    placeholder="Email"
                    autofocus={true}
                    submit={submitEmail}
                  />
                  <Input
                    style={tw`p-4 bg-gray-200 mt-3 rounded-xl`}
                    placeholder="Password"
                    secureTextEntry={true}
                    submit={submitPassword}
                  />
                  <TouchableOpacity
                    style={tw`p-3`}
                    onPress={() => {
                      navigation.navigate("ForgotPassword", {
                        previous_screen: "Login",
                      });
                    }}
                  >
                    <Text style={tw`text-red-800 mt-1`}>Forgot Password ?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`p-4 mt-3 rounded-xl bg-red-800 items-center content-center`}
                    onPress={() => {
                      authenticate();
                    }}
                  >
                    {isLoading === true ? (
                      <ActivityIndicator color="white" size={30} />
                    ) : (
                      <Text style={[tw`text-lg font-bold`, { color: "white" }]}>
                        Login
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
                {/* Gutter */}
                <View
                  style={tw`flex ml-20 flex-row p-5 items-center content-center`}
                >
                  <Text>Don't have an account ?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CreateAccount");
                    }}
                  >
                    <Text style={[tw`ml-2`, { color: "#8D161A" }]}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              {console.log(data)}
            </>
          </KeyboardAvoidingView>
        </>
      </NetworkContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
