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
import * as API from "../../../data/remote/userApiCalls";
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
  const userData: any = React.useContext(NetworkContext);
  const [myCourses, setMyCourses] = useState<Array<Object>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  useEffect(() => {
    API.fetchMyCourse(userData.token)
      ?.then((data) => {
        console.log(data.data);
        setMyCourses(data.data);
        setLoading(true);
        setHasFetched(true);
      })
      .catch((error) => {
        alert(error);
      });
  }, [myCourses, setMyCourses]);
  const search = (text: string): void => {
    console.log(text);
  };

  return (
    <>
      <View style={tw`mt-10 ml-5 mr-5 pb-40`}>
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
            <View>
              <Text>Courses found successfully</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}
