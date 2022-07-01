import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import Input from "../../Components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TopTutors from "../../Components/TopTutors";

const offers = [
  {
    key: 2,
    title: "30% Off",
  },
  {
    key: 1,
    title: "30% Off",
  },
];

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[tw`p-6`]}>
          {/* navbar */}
          <View style={tw`mt-10 flex flex-row justify-between`}>
            <View style={tw`flex flex-row`}>
              {/* // Image and greeting */}
              <View style={tw`w-70 flex flex-row`}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Image
                    style={tw`h-10 w-10 p-4 rounded-full`}
                    source={require("../../assets/images/person.jpg")}
                  />
                </TouchableOpacity>
                <View style={tw`ml-2`}>
                  <Text style={tw`text-xs text-gray-400`}>Hello</Text>
                  <Text style={tw`font-extrabold text-gray-800 text-sm`}>
                    Ikwue Inalegwu
                  </Text>
                </View>
              </View>
              {/* icons */}
              <View style={tw`flex flex-row justify-around p-3`}>
                <TouchableOpacity style={tw`w-10`}>
                  <FontAwesome name="bell" size={20} style={tw`text-red-800`} />
                </TouchableOpacity>
                <TouchableOpacity style={tw`w-10`}>
                  <FontAwesome
                    name="bookmark"
                    size={20}
                    style={tw`text-red-800`}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* search bar */}
          <Input
            style={tw`p-4 mt-5 rounded-xl bg-gray-200`}
            placeholder="Search"
            secureTextEntry={false}
          />
        </View>
        {/* Offers Component */}
        <View style={tw`h-50 bg-red-800 ml-5 mr-5 rounded-xl`}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            indicatorStyle="white"
          >
            {offers.map((item) => {
              return (
                <View style={tw`p-5 w-90 `} key={item.key}>
                  <Text style={tw`text-2xl text-white font-bold`}>
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {/* Top Tutors Component */}
        <TopTutors />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
