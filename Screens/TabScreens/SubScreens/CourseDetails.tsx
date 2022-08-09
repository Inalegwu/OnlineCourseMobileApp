import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import * as API from "../../../data/remote/userApiCalls";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NetworkContext } from "../../../Components/ContextProvider";
import BookmarkBtn from "../../../Components/BookmarkBtn";

interface ResponseData {
  status: boolean;
  message?: string;
  data?: object;
}

export default function CourseDetails({ route, navigation }: any) {
  const { data }: any = route.params;
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [bookmarked, setBookmared] = useState<boolean>(false);
  const shareData = async () => {
    try {
      await Share.share({
        message: `${data.title} is a great course provided by E-Limi-Education, Attend Here ${data.shareable_link}`,
      });
    } catch (error) {
      alert(error);
    }
  };
  // !read only
  const userData = React.useContext(NetworkContext);

  const addToBookmarked = () => {
    if (bookmarked === false) {
      setBookmared(true);
    } else {
      setBookmared(false);
    }
  };

  const addToCart = () => {
    console.log(
      "adding" + " " + data.title + " " + "at" + data.price + " " + "To cart..."
    );
  };

  const checkEnrollment = (courseData: any, userData: any) => {
    console.log("Fetching enrolled courses...");
    API.fetchMyCourse(userData.token)
      .then((data: ResponseData) => {
        const enrollementData = data.data;
        console.log(enrollementData);
        for (let index = 0; index < enrollementData.length; index++) {
          const element = enrollementData[index];
          if ((element.id = courseData.id)) {
            console.log("matching id detected");
            setIsEnrolled(true);
          } else {
            console.log("no matching id detected");
            setIsEnrolled(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const enrol = () => {
    console.log("Enrolling...");
    useEffect(() => {
      API.enrol(userData.token, data.id)
        .then((data) => {
          console.log(data);
          setIsEnrolled(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setIsEnrolled, isEnrolled]);
  };

  return (
    <NetworkContext.Provider value={userData}>
      <>
        <StatusBar style="light" />
        {/* Top View */}
        {checkEnrollment(data, userData)}
        <View>
          <Image
            source={{ uri: route.params.data.thumbnail }}
            style={[
              tw`h-95 w-full`,
              {
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              },
            ]}
          />
          <BookmarkBtn
            size={18}
            onPress={addToBookmarked}
            style={tw`p-5 bg-gray-200 w-15 top-88 left-81 rounded-full shadow-lg items-center content-center absolute z-10`}
            iconName={bookmarked == false ? "bookmark-outline" : "bookmark"}
          />
          <View
            style={tw`mt-15 ml-6 mr-6 flex absolute flex-row justify-between`}
          >
            {/* Back Btn */}
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome
                size={20}
                style={tw`text-red-300`}
                name="arrow-left"
              />
            </TouchableOpacity>
            {/* Share Button */}
            <TouchableOpacity onPress={shareData} style={tw`left-78 top--3`}>
              <Ionicons name="share" size={30} style={tw`text-red-300`} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={tw`p-2`}>
          {/* Title */}
          <View style={tw` mt-3 flex flex-row justify-between m-2`}>
            <Text style={tw`text-3xl w-85 ml-2 text-black font-bold`}>
              {data.title}
            </Text>
          </View>
          {/* Quick Info */}
          <View style={tw`ml-4 mr-4`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-red-200 w-20 p-3 items-center content-center p-1 rounded-xl`}
              >
                {data.discount_flag === null ? (
                  <Text style={tw`font-bold text-red-800`}>Paid</Text>
                ) : (
                  <Text style={tw`font-bold text-red-800`}>Discounted</Text>
                )}
              </View>
            </View>
            <View style={tw`mt-3 ml-2 mr-2 flex flex-row`}>
              <Text style={tw`font-bold text-red-800 text-xl`}>
                {data.price}
              </Text>
              {data.discounted_flag === null ? null : (
                <Text style={tw`text-gray-400 ml-4 mt-2`}>
                  {data.discounted_price}
                </Text>
              )}
            </View>
            <View
              style={tw`flex flex-row items-start content-start justify-between ml-2 mr-2 mt-3`}
            >
              {/* Info */}
              <View style={tw`flex flex-row w-20`}>
                <FontAwesome
                  name="users"
                  size={20}
                  style={tw`text-red-800 mt-1`}
                />
                <Text style={tw`text-lg ml-3 font-bold text-red-800`}>
                  {data.total_enrollment}
                </Text>
              </View>
            </View>
            {/* Tutor */}
            <View style={tw`p-2 mt-3`}>
              <Text style={tw`text-gray-600 text-xs`}>Taught By : </Text>
              <Text style={tw`font-bold text-lg text-gray-900`}>
                {data.instructor_name}
              </Text>
            </View>
            {/* Description */}
            <Text style={tw`font-bold ml-2 w-100 text-xl mt-3 text-red-800`}>
              About The Course
            </Text>
            <View style={tw`p-2`}>
              <Text style={tw`text-gray-900 font-bold text-xl`}>
                {/* {data.short_description.slice(0, 62) + "..."} */}
                {data.short_description}
              </Text>
            </View>
            <TouchableOpacity
              style={
                isEnrolled === false
                  ? tw`p-4 mt-4 mb-7 items-center content-center rounded-full bg-red-800`
                  : tw`p-4 mt-4 mb-7 items-center content-center rounded-full bg-gray-300`
              }
              onPress={enrol()}
            >
              <Text style={tw`font-bold text-white text-lg`}>
                {isEnrolled === false ? `Enroll - ${data.price}` : "Enrolled"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    </NetworkContext.Provider>
  );
}
