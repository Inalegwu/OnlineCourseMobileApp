import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import * as API from "../../../data/remote/userApiCalls";
import { NetworkContext } from "../../../Components/ContextProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AttendCourse({ navigation, route }) {
  const [fetchedData, setFetchedData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { courseData } = route.params;
  const userData = React.useContext(NetworkContext);

  // useEffect(() => {

  // }, [fetchedData, setFetchedData, isLoading, setIsLoading]);
  // ! useEffect makes data load from beggining of application launch
  // ! this was the cause of the bottle  neck
  API.fetchLessons(userData.token, "course", courseData.id)
    .then((data) => {
      console.log(data.data);
      setFetchedData(data.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });

  const renderItem = ({ item }) => {
    return (
      <View style={tw`p-5 rounded-lg bg-gray-200 mt-2 mb-2`}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={tw`mt-8`}>
      <View style={tw`flex flex-row justify-between mt-3 ml-2 mr-2`}>
        <TouchableOpacity
          style={tw`p-4 mt-1`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name="arrow-left" size={20} color="#8D161A" />
        </TouchableOpacity>
        <Text
          style={tw`p-3 mt-1 shadow-lg font-bold text-xl items-center content-center`}
        >
          Course Content
        </Text>
      </View>
      {isLoading === true ? (
        <ActivityIndicator
          style={tw`text-center left-2 mt-10`}
          size="large"
          color="#8D161A"
        />
      ) : (
        <View style={tw`p-3 w-full mb-20`}>
          {/* <FlatList data={fetchedData} renderItem={renderItem} /> */}
          <ScrollView
            contentContainerStyle={tw`pb-20`}
            showsVerticalScrollIndicator={false}
          >
            {fetchedData.map((item) => {
              return (
                <View
                  style={tw`p-5 flex justify-between flex-row bg-gray-200 mt-3 mb-3 rounded-lg`}
                  key={item.id}
                >
                  <View style={tw`w-58`}>
                    <Text>{item.title}</Text>
                    <Text>{item.duration}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.lesson_type == "video") {
                          navigation.navigate("VideoScreen", { data: item });
                        } else {
                          navigation.navigate("ReaderScreen", { data: item });
                        }
                      }}
                      style={tw`p-5 bg-red-800 rounded-full`}
                    >
                      <FontAwesome5 name="play" color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
