import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { fetchTopCourses } from "../data/remote/userApiCalls";
import CourseItem from "./CourseItem";

interface ResponseType {
  status: Boolean;
  data?: object[];
  message?: string;
}

export default function TopCourses({ navigation, Bookmarks }: any) {
  const [loading, setloading] = useState(true);
  const [fetchedData, setFetchedData] = useState<Object[]>();
  let bookmarkLists = Bookmarks;
  // try to fetch the currently top rated courses , returns NetworkError if fetching fails

  try {
    useEffect(() => {
      fetchTopCourses()
        ?.then((data: ResponseType) => {
          setFetchedData(data.data);
          setloading(false);
        })
        .catch((error) => {
          console.log(
            error.toString() + ": unable to complete top courses call"
          );
        });
    }, [fetchedData, setFetchedData, loading, setloading]);
  } catch (error: unknown) {
    console.log(error);
  }

  return (
    <View style={tw`p-5 mt-5 justify-start`}>
      {/* Details Buttons */}
      <View style={tw`flex flex-row justify-around`}>
        <Text style={tw`text-red-800 font-bold ml-4`}>Top Courses</Text>
        <TouchableOpacity>
          <Text style={tw`text-red-800 text-right w-70 mr-3 font-bold`}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        indicatorStyle="white"
        contentContainerStyle={{ marginTop: 5 }}
      >
        {loading === true ? (
          <ActivityIndicator
            style={tw`text-center left-2 mt-4`}
            size="large"
            color="#8D161A"
          />
        ) : (
          fetchedData?.map((data: any) => {
            return (
              <CourseItem
                bookmarks={bookmarkLists}
                navigation={navigation}
                key={data.id}
                data={data}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
