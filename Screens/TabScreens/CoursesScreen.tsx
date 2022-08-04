import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NetworkContext } from "../../Components/ContextProvider";
import { createStackNavigator } from "@react-navigation/stack";
import renderCourses from "./CoursesSubScreens/renderCourses";
import CourseDetailsScreen from "./CoursesSubScreens/CourseDetailsScreen";
import AttendCourse from "./CoursesSubScreens/AttendCourse";
import VideoScreen from "./CoursesSubScreens/VideoScreen";
import ReaderScreen from "./CoursesSubScreens/ReaderScreen";

const Stack = createStackNavigator();

export default function CoursesScreen() {
  const data = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={data}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyCourse" component={renderCourses} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="AttendCourse" component={AttendCourse} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="ReaderScreen" component={ReaderScreen} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
