import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video } from "expo-av";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function VideoScreen({ navigation, route }: any) {
  // pull data from the route parameters
  const { data } = route.params;
  return (
    <View style={tw`h-full`}>
      <>
        {console.log(data.video_url_for_mobile_application)}
        <View style={tw`flex absolute  z-1 flex-row justify-between`}>
          <TouchableOpacity
            style={tw`p-8 top-10`}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="arrow-left" size={23} color="white" />
          </TouchableOpacity>
        </View>
        <Video
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            // uri: data.video_url_for_mobile_application,
          }}
          useNativeControls={true}
          style={tw`h-full w-full bg-black`}
          resizeMode="contain"
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
