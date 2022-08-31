import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";
import { fetchMyCourse } from "../../../data/remote/userApiCalls";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../../Components/Input";

// type CourseType = {
//   id: string;
//   title: string;
//   description: string;
//   short_description: string;
//   thumbnail: string;
// };

export default function RenderCourses({ navigation }: any) {
  const data: any = React.useContext(NetworkContext);
  const [myCourses, setMyCourses] = useState<Object[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  if (myCourses === undefined) {
    fetchMyCourse(data.token)
      ?.then((data) => {
        setMyCourses(data.data);
        setLoading(true);
        setHasFetched(true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  const search = (text: string): void => {
    console.log(text);
  };

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
          submit={search}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading === false ? (
            <ActivityIndicator
              style={tw`text-center left-2 mt-10`}
              size="large"
              color="#8D161A"
            />
          ) : (
            myCourses?.map((data: any) => {
              if (data === null) {
                return <Text>You Currently Don't Have Any Courses</Text>;
              } else {
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
              }
            })
          )}
        </ScrollView>
      </View>
    </>
  );
}