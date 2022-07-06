import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./TabScreens/HomeScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import InboxScreen from "./TabScreens/InboxScreen";
import CartScreen from "./TabScreens/CartScreen";
import CoursesScreen from "./TabScreens/CoursesScreen";
import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetails from "./TabScreens/SubScreens/CourseDetails";
import { NetworkContext } from "../Components/ContextProvider";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Home({ navigation, route }) {
  const color = "#8D161A";
  const { data } = route.params;
  console.log(data);
  return (
    <NetworkContext.Provider value={data}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarActiveTintColor: "#8D161A",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="home" size={20} color={color} />;
            },
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Inbox"
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="message-square" color={color} size={20} />;
            },
          }}
          component={InboxScreen}
        />
        <Tab.Screen
          name="Cart"
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="shopping-cart" color={color} size={20} />;
            },
          }}
          component={CartScreen}
        />
        <Tab.Screen
          name="Courses"
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="book" color={color} size={20} />;
            },
          }}
          component={CoursesScreen}
        />
      </Tab.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
