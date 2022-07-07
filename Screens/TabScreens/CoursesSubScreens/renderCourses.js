import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";
import * as API from "../../../data/remote/userApiCalls";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../../Components/Input";

export default function RenderCourses({ navigation }) {
  const data = React.useContext(NetworkContext);
  const [myCourses, setMyCourses] = useState();
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  if (myCourses === undefined) {
    API.fetchMyCourse(data.token)
      .then((data) => {
        setMyCourses(data.data);
        setLoading(true);
        setHasFetched(true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <View style={tw`mt-10 ml-5 mr-5`}>
        <Text
          style={tw`mt-4 ml-1 w-full mb-3 text-center font-bold text-2xl text-gray-800`}
        >
          My Courses
        </Text>
        <Input
          style={tw`bg-gray-200 p-3 rounded-3xl mb-3 shadow-lg mt-3`}
          placeholder="Search"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading === false ? (
            <ActivityIndicator
              style={tw`text-center left-2 mt-10`}
              size="large"
              color="#8D161A"
            />
          ) : (
            myCourses.map((data) => {
              return (
                <TouchableOpacity
                  key={data.id}
                  style={tw`p-6 mt-5 bg-gray-200 rounded-lg flex flex-row`}
                  onPress={() => {
                    navigation.navigate("CourseDetails", { data: data });
                  }}
                >
                  <View>
                    <Image
                      style={tw`h-18 w-18 rounded-lg mt-1`}
                      source={{ uri: data.thumbnail }}
                    />
                  </View>
                  <View style={tw`w-60 ml-3`}>
                    <Text style={tw`font-bold text-lg text-gray-800`}>
                      {data.title}
                    </Text>
                    <Text>{data.short_description.slice(0, 54) + "..."}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
