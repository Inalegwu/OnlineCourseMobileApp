// author : Ikwue Inalegwu
// email :ikwueinalegwu@gmail.com
// phone number : (+234) 708 096 8858
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
import React, { useState } from "react";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import Input from "../../../Components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import OffersComponent from "../../../Components/OffersComponent";
import TopCourses from "../../../Components/TopCourses";
import { NetworkContext } from "../../../Components/ContextProvider";

export default function RenderHome({ navigation, route }) {
  // TODO caching result of api request to prevent constant loading
  const [searchText, setSearchText] = useState();
  const search = (text) => {
    console.log(text);
  };
  const data = React.useContext(NetworkContext);
  return (
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
                  navigation.navigate("AccountDetails");
                }}
              >
                <Image
                  style={tw`h-10 w-10 p-4 rounded-full`}
                  source={require("../../../assets/images/person.jpg")}
                />
              </TouchableOpacity>
              <View style={tw`ml-2`}>
                <Text style={tw`text-xs text-gray-400`}>Hello</Text>
                <Text style={tw`font-extrabold text-gray-800 text-base`}>
                  {data.first_name + " " + data.last_name}
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
          onChangeText={search()}
        />
      </View>
      {/* Offers Component */}
      <OffersComponent />
      {/* Top Courses Component */}
      <TopCourses navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
