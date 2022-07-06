import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { NetworkContext } from "../../Components/ContextProvider";
import * as API from "../../data/remote/userApiCalls";
import CourseItem from "../../Components/CourseItem";
import { createStackNavigator } from "@react-navigation/stack";
import renderCourses from "./CoursesSubScreens/renderCourses";

const Stack = createStackNavigator();

export default function CoursesScreen() {
  const data = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={data}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyCourse" component={renderCourses} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
