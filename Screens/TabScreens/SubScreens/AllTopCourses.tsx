import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import CourseItem from "../../../Components/CourseItem";

export default function AllTopCourses({ navigation, route }: any) {
  const { data } = route.params;

  return (
    <View style={tw`p-3 mt-8`}>
      {console.log(data)}
      <View style={tw`flex flex-row p-3`}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={tw`mt-1`}
        >
          <Feather name="arrow-left" size={25} color="#8D161A" />
        </TouchableOpacity>
        <Text style={tw`font-bold text-red-800 text-lg ml-4 mt-0.4`}>
          All Top Courses
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          margin: 10,
          paddingBottom: 150,
          paddingTop: 10,
        }}
      >
        {data.map((item) => {
          return (
            <CourseItem navigation={navigation} key={item.id} data={item} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
