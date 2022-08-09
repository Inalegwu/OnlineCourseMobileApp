import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BookmarkBtn from "../../../Components/BookmarkBtn";

export default function RenderCourseDetails({ navigation, route }: any) {
  const [bookmarked, setBookmarked] = useState(false);
  const { data } = route.params;
  const setBookmark = () => {
    if (bookmarked === false) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  };
  const shareData = async () => {
    try {
      await Share.share({ message: data.shareable_link });
    } catch (error) {
      alert(error);
    }
  };
  const modules_done = data.total_number_of_completed_lessons;
  const total_modules = data.total_number_of_lessons;
  let calc_width = (modules_done / total_modules) * 100;
  // let calc_width = 45;
  return (
    <>
      <View
        style={tw`absolute flex flex-row z-10 top-10 p-4 w-full justify-between`}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome style={tw`text-red-800`} name="arrow-left" size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareData}>
          <Ionicons style={tw`text-red-800`} name="share" size={30} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: data.thumbnail }} style={tw`h-100 w-full`} />
      <BookmarkBtn
        onPress={setBookmark}
        size={18}
        style={tw`p-5 bg-gray-200 w-15 top-92 left-80 rounded-full shadow-lg items-center content-center absolute z-10`}
        iconName={bookmarked === false ? "bookmark-outline" : "bookmark"}
      />
      <ScrollView contentContainerStyle={tw`p-4`}>
        <View style={tw`h-full`}>
          <>
            <Text style={tw`font-bold text-gray-900 text-2xl`}>
              {data.title}
            </Text>
            <Text style={tw`text-gray-600 font-bold mt-1`}>
              {data.instructor_name}
            </Text>
            {console.log(data)}
            <Text style={tw`text-gray-500 mt-2`}>{data.short_description}</Text>
            <Text style={tw`font-bold text-gray-800 text-lg mt-3 mb-1`}>
              Outcomes
            </Text>
            <View style={tw`mb-4`}>
              {data.outcomes.map((item: any) => {
                return <Text key={item}>{item}</Text>;
              })}
            </View>
            <View style={tw`mb-10`}>
              <Text style={tw`mb-2 font-bold text-gray-800 text-lg`}>
                Progress
              </Text>
              <View style={tw`w-full bg-gray-300 rounded-full`}>
                <View
                  style={tw`bg-red-900 w-${
                    calc_width <= 80 ? calc_width : "full"
                  } p-1 rounded-full`}
                ></View>
              </View>
              <Text style={tw`text-gray-500 mt-1`}>
                {data.total_number_of_completed_lessons +
                  "/" +
                  data.total_number_of_lessons}
              </Text>
            </View>
            <TouchableOpacity
              style={tw`p-5 shadow-lg items-center content-center rounded-full bg-red-800 w-full`}
              onPress={() => {
                navigation.navigate("AttendCourse", { courseData: data });
              }}
            >
              <Text style={tw`font-bold  text-white`}>Start Lesson</Text>
            </TouchableOpacity>
          </>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
