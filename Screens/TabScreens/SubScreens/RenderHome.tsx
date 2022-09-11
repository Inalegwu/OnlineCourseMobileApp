// author : Ikwue Inalegwu
// email :ikwueinalegwu@gmail.com
// phone number : (+234) 708 096 8858
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import Input from "../../../Components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import OffersComponent from "../../../Components/OffersComponent";
import TopCourses from "../../../Components/TopCourses";
import { NetworkContext } from "../../../Components/ContextProvider";
import * as API from "../../../data/remote/userApiCalls";

export default function RenderHome({ navigation, route }: any) {
  // TODO caching result of api request to prevent constant loading
  const [searchText, setSearchText] = useState();
  let bookmarks: Array<Object>;
  const search = (text: string) => {
    if (text != null) {
      console.log(text);
      setSearchText(text);
    } else {
      console.log("null text");
    }
  };

  API.fetchCourseBySearchString(searchText)
    ?.then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const data = React.useContext(NetworkContext);
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`bg-gray-100 dark:bg-gray-900`}
      >
        <View style={[tw`p-6`]}>
          {/* navbar */}
          <View style={tw`mt-10 flex flex-row justify-between`}>
            <View style={tw`flex flex-row`}>
              {/* // Image and greeting */}
              <View style={tw`w-70 flex flex-row`}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AccountDetails", { data: data });
                  }}
                >
                  <Image
                    style={tw`h-10 w-10 p-4 rounded-full`}
                    source={{
                      uri:
                        `https://e-limi.africa/uploads/user_image/placeholder.png` ||
                        `https://e-limi.africa/uploads/user_image/${data.user_id}.jpg`,
                    }}
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
                <TouchableOpacity
                  style={tw`w-10`}
                  onPress={() => {
                    navigation.navigate("BookmarkScreen", {
                      data: data,
                    });
                  }}
                >
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
          <View style={tw`w-full justify-center mt-4 flex flex-row`}>
            <Input
              style={tw`p-4 rounded-xl bg-gray-200 w-90`}
              placeholder="Search"
              secureTextEntry={false}
              submit={search}
            />
          </View>
        </View>
        {/* Offers Component */}
        <OffersComponent />
        {/* Top Courses Component */}
        <TopCourses Bookmarks={bookmarks} navigation={navigation} />
        {console.log(bookmarks)}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
