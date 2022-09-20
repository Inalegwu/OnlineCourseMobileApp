// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 070 8096 8858
// Company : Cstemp Edutech
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ScreenOrientation from "expo-screen-orientation";

export default function VideoScreen({ navigation, route }: any) {
  const [screenOrientation, setScreenOrientation] = useState<number>(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
  // pull data from the route parameters
  const { data } = route.params;

  async function changeScreenOrientation() {
    if (screenOrientation == ScreenOrientation.OrientationLock.PORTRAIT_UP) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      setScreenOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      setScreenOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }

  return (
    <View style={tw`h-full`}>
      <>
        <View style={tw`flex absolute w-full  z-1 flex-row justify-between`}>
          <TouchableOpacity
            style={tw`p-8 top-10`}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="arrow-left" size={23} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-8 top-10 left--2`}
            onPress={() => {
              changeScreenOrientation();
            }}
          >
            <FontAwesome name="rotate-right" size={23} color="white" />
          </TouchableOpacity>
        </View>
        <Video
          source={{
            // uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            uri: "https://youtu.be/wao1xCQ7dtw",
            // uri: data.video_url_for_mobile_application,
          }}
          useNativeControls={true}
          style={tw`h-full w-full bg-black`}
          resizeMode={ResizeMode.CONTAIN}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
