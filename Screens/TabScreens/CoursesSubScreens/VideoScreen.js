import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video } from "expo-av";
import tw from "twrnc";

export default function VideoScreen({ navigation, route }) {
  const { data } = route.params;
  return (
    <View style={tw`h-full`}>
      {console.log(data.video_url_for_mobile_application)}
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          // uri: data.video_url_for_mobile_application,
        }}
        useNativeControls={true}
        style={tw`h-100 w-full`}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
