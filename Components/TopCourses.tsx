import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import * as API from "../data/remote/userApiCalls";
import CourseItem from "./CourseItem";

interface ResponseType {
  status: Boolean;
  data?: object[];
  message?: string;
}

export default function TopCourses({ navigation, Bookmarks }: any) {
  const [loading, setloading] = useState(true);
  const [fetchedData, setFetchedData] = useState<Object[]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  let bookmarkLists = Bookmarks;
  // try to fetch the currently top rated courses , returns NetworkError if fetching fails

  useEffect(() => {
    API.fetchTopCourses()
      ?.then((data: ResponseType) => {
        setFetchedData(data.data);
        setloading(false);
      })
      .catch((error: unknown) => {
        console.log(error.toString() + ": unable to complete top courses call");
      });
  }, [fetchedData, setFetchedData, loading, setloading]);

  // custom timeout function
  const wait = (timeOut: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeOut));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => {
      API.fetchTopCourses()
        .then(() => setloading(true))
        ?.then((data) => {
          setFetchedData(data.data);
        })
        .catch((err: unknown) => console.log(err));
      setRefreshing(false);
    });
  };

  return (
    <View style={tw`p-5 justify-start`}>
      {/* Details Buttons */}
      <View style={tw`flex flex-row justify-around`}>
        <Text style={tw`text-red-800 font-bold ml-4`}>Top Courses</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllTopCourses", { data: fetchedData });
          }}
        >
          <Text style={tw`text-red-800 text-right w-70 mr-3 font-bold`}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        indicatorStyle="white"
        contentContainerStyle={{
          marginTop: 5,
          marginBottom: 10,
          paddingBottom: 530,
          paddingTop: 10,
        }}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {loading === true ? (
          <ActivityIndicator
            style={tw`text-center left-2 mt-4`}
            size="large"
            color="#8D161A"
          />
        ) : (
          fetchedData?.slice(0, 5).map((data: any) => {
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
