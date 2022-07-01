import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import * as API from "../data/remote/userApiCalls";
import CourseItem from "./CourseItem";

export default function TopCourses() {
  const [loading, setloading] = useState(false);
  const [fetchedData, setFetchedData] = useState();
  const [categories, setCategories] = useState();
  API.fetchTopCourses()
    .then((data) => {
      setFetchedData(data.data);
      setloading(true);
    })
    .catch((error) => {
      console.log(error.toString() + "unable to complete top courses call");
    });
  //   API.fetchCategories()
  //     .then((data) => {
  //       setCategories(data.data);
  //       setloading(true);
  //     })
  //     .catch(() => {
  //       console.log("unable to complete categories call");
  //     });
  return (
    <View style={tw`p-5 justify-start`}>
      {/* Details Buttons */}
      <View style={tw`flex flex-row justify-around`}>
        <Text style={tw`text-red-800 font-bold ml-4`}>Top Courses</Text>
        <TouchableOpacity>
          <Text style={tw`text-red-800 text-right w-70 mr-3 font-bold`}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Categories Controller */}
      {/* <View style={tw`p-2 mt-3 flex flex-row`}>
        {<Text>{categories}</Text>}
      </View> */}
      {/* ScrollView */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        indicatorStyle="white"
      >
        {loading === false ? (
          <ActivityIndicator
            style={tw`text-center left-2 mt-4`}
            size="large"
            color="#8D161A"
          />
        ) : (
          fetchedData.map((data) => {
            return <CourseItem key={data.id} data={data} />;
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
