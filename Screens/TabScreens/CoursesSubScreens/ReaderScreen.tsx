import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import WebView from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ReaderScreen({ navigation, route }: any) {
  const { data } = route.params;
  return (
    <View>
      <View
        style={tw`bg-white absolute z-1 flex flex-row justify-around shadow-lg w-full p-10 h-30 items-center content-center`}
      >
        <View style={tw`flex flex-row mt-5 justify-between`}>
          <TouchableOpacity
            style={tw`mr-4`}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={tw`w-70 m-auto font-bold text-sm`}>{data.title}</Text>
        </View>
        <WebView
          source={{ uri: "https://duckduckgo.com/?q=pdf+link&t=min&ia=web" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
