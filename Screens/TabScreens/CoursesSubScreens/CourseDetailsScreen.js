import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CourseDetailsScreen({ navigation, route }) {
  const { data } = route.params;
  const shareData = async () => {
    try {
      await Share.share({ message: data.shareable_link });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View>
        {/* image */}
        <Image source={{ uri: data.thumbnail }} style={tw`h-100 w-150`} />
        <TouchableOpacity
          style={tw`absolute top-93 left-32 p-3 shadow-xl rounded-full w-40 bg-red-800`}
        >
          <Text style={tw`font-bold text-white text-center`}>
            {data.status == "active" ? "Enrolled" : "Enroll"}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
