import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import * as API from "../../../data/remote/userApiCalls";
import { NetworkContext } from "../../../Components/ContextProvider";

export default function AttendCourse({ navigation, route }) {
  const [fetchedData, setFetchedData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { courseData } = route.params;
  const userData = React.useContext(NetworkContext);

  API.fetchLessons(userData.token, "course", courseData.id)
    .then((data) => {
      setFetchedData(data.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <View style={tw`mt-8`}>
      {isLoading === true ? (
        <ActivityIndicator
          style={tw`text-center left-2 mt-10`}
          size="large"
          color="#8D161A"
        />
      ) : (
        <View style={tw`p-1`}>
          <ScrollView contentContainerStyle={tw`p-3`}>
            {fetchedData.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={tw`p-5 rounded-lg mt-2 bg-gray-300 flex justify-between flex-row`}
                >
                  <View>
                    <Text style={tw`font-bold`}>
                      {item.title.slice(0, 45) + "..."}
                    </Text>
                    <Text style={tw`text-gray-500`}>{item.duration}</Text>
                  </View>
                  <View style={tw`mt-3 ml--2`}>
                    <Text style={tw`text-red-800`}>Start</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
