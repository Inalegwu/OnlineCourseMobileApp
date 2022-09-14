import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import * as API from "../data/remote/userApiCalls";

export default function AllCourses() {
  const [allcourses, setAllCourse] = useState<Array<Object>>();

  return (
    <View style={tw`p-10 flex flex-row`}>
      <Text>content</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
