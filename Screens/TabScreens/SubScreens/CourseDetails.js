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
import React, { useState } from "react";
import tw from "twrnc";
import * as API from "../../../data/remote/userApiCalls";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import WebView from "react-native-webview";

export default function CourseDetails({ route, navigation }) {
  const { data } = route.params;
  const shareData = async () => {
    try {
      await Share.share({ message: data.shareable_link });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <StatusBar style="light" />
      {/* Top View */}
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
        <View
          style={tw`mt-15 ml-6 mr-6 flex absolute flex-row justify-between`}
        >
          {/* Back Btn */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome size={20} style={tw`text-red-300`} name="arrow-left" />
          </TouchableOpacity>
          {/* Share Button */}
          <TouchableOpacity onPress={shareData} style={tw`left-70 top-1`}>
            <Ionicons
              name="md-share-social-sharp"
              size={20}
              style={tw`text-red-300`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`p-2`}>
        {/* Title */}
        <View style={tw` mt-3 flex flex-row justify-between m-2`}>
          <Text style={tw`text-3xl w-85 ml-2 text-black font-bold`}>
            {data.title}
          </Text>
          <TouchableOpacity style={tw`p-2 w-20`}>
            <Ionicons
              name="md-bookmark-outline"
              style={tw`text-red-800`}
              size={20}
            />
          </TouchableOpacity>
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
            <Text style={tw`font-bold text-red-800 text-xl`}>{data.price}</Text>
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
            style={tw`p-4 mt-4 mb-7 items-center content-center rounded-full bg-red-800`}
          >
            <Text style={tw`font-bold text-white text-lg`}>
              Enroll - {data.price}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
