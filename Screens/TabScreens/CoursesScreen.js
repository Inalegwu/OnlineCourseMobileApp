import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NetworkContext } from "../../Components/ContextProvider";
import { createStackNavigator } from "@react-navigation/stack";
import renderCourses from "./CoursesSubScreens/renderCourses";
import CourseDetailsScreen from "./CoursesSubScreens/CourseDetailsScreen";

const Stack = createStackNavigator();

export default function CoursesScreen() {
  const data = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={data}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyCourse" component={renderCourses} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
