import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./TabScreens/HomeScreen";
import InboxScreen from "./TabScreens/InboxScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
