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
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import Input from "../../../Components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import OffersComponent from "../../../Components/OffersComponent";
import TopCourses from "../../../Components/TopCourses";
import { NetworkContext } from "../../../Components/ContextProvider";
import * as API from "../../../data/remote/userApiCalls";
import AllCourses from "../../../Components/AllCourses";
import CourseItem from "../../../Components/CourseItem";

export default function RenderHome({ navigation, route }: any) {
  // TODO caching result of api request to prevent constant loading
  const [searchText, setSearchText] = useState();
  const [visible, setVisible] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<Array<Object> | undefined>();
  let bookmarks: Array<Object>;
  const search = (text: string) => {
    setVisible(true);
    API.fetchCourseBySearchString(text)
      ?.then((data) => {
        setSearchData(data.data);
        console.log(data);
        console.log("Set Search Data Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = React.useContext(NetworkContext);
  return (
    <>
      <View style={tw`bg-gray-100 dark:bg-gray-900`}>
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
              <View style={tw`flex flex-row justify-around p-3`}></View>
            </View>
          </View>
          {/* search bar */}
          <View style={tw`w-full justify-center mt-4`}>
            <Input
              style={tw`p-4 rounded-xl bg-gray-200 w-90`}
              placeholder="Search"
              secureTextEntry={false}
              submit={search}
            />
            {visible === true ? (
              <ScrollView
                contentContainerStyle={[
                  tw`h-90 bg-gray-200 mt-2 rounded-lg pb-10`,
                  { flexGrow: 1 },
                ]}
              >
                {/* close btn */}
                <TouchableOpacity
                  style={tw`p-3 m-2 h-10 w-10 items-center justify-center rounded-full`}
                  onPress={() => {
                    setVisible(false);
                  }}
                >
                  <FontAwesome name="close" size={15} color="#8D161A" />
                </TouchableOpacity>
                {/* return items */}
                {searchData?.slice(0, 3)?.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        navigation.navigate("CourseDetails", { data: item });
                      }}
                      style={tw`flex p-2 mt-3  flex-row`}
                    >
                      <Image
                        source={{ uri: item.thumbnail }}
                        style={tw`h-15 w-15 rounded-full`}
                      />
                      <View style={tw`ml-2 mt-1`}>
                        <Text style={tw`font-bold`}>{item.title}</Text>
                        <Text style={tw`text-gray-400`}>
                          {item.short_description.slice(0, 40) + "..."}
                        </Text>
                        <Text style={tw`text-gray-400`}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : (
              <View></View>
            )}
          </View>
        </View>
        <TopCourses navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
