import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoard from "../Screens/OnBoard";
import CreateAccount from "../Screens/CreateAccount";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import ForgotPassword from "../Screens/ForgotPassword";
import { StatusBar } from "expo-status-bar";
import { NetworkContext } from "./ContextProvider";

const Stack = createStackNavigator();

export default function Main() {
  const { data } = React.useContext(NetworkContext);
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <NetworkContext.Provider value={data}>
          <Stack.Navigator
            initialRouteName="OnBoard"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="OnBoard" component={OnBoard} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </NetworkContext.Provider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
