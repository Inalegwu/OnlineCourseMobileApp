import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
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

const TabBarButton = (props: any) => {
  const { onPress, name, color, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity onPress={onPress} style={tw`p-3 ml-16.5`}>
      <Feather
        size={20}
        name={name}
        color={focused === true ? color : "black"}
      />
    </TouchableOpacity>
  );
};

export default function Home({ navigation, route }: any) {
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
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#8D161A",
          tabBarInactiveTintColor: "black",
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60,
            padding: 8,
            position: "absolute",
            margin: 10,
            borderRadius: 10,
            marginBottom: 20,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="home" color={color} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Inbox"
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="message-square" color={color} />
            ),
          }}
          component={InboxScreen}
        />
        <Tab.Screen
          name="Courses"
          options={{
            tabBarButton: (props) => (
              <TabBarButton {...props} name="book" color={color} />
            ),
          }}
          component={CoursesScreen}
        />
      </Tab.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
