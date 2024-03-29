// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 070 8096 8858
// Company : Cstemp Edutech
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Input from "../../../Components/Input";
import * as ImagePicker from "expo-image-picker";
import * as API from "../../../data/remote/userApiCalls";
import { updateUserData } from "../../../data/remote/userApiCalls";

interface ResponseData {
  status: Boolean;
  message?: string;
  data?: Object;
}

export default function AccountDetails({ navigation }: any) {
  let data: any = React.useContext(NetworkContext);
  const [image, setImage] = useState<string>(
    "../../../assets/images/avatar.png"
  );
  const [takenImage, setTakenImage] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // select image from users image library
  //TODO take image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const takeImage = async () => {
    let image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.6,
    });
    console.log(image);
    if (!image.cancelled) {
      setTakenImage(image.uri);
    }
  };

  const logout = () => {
    data = {};
    navigation.navigate("Login", {
      previousScreen: "AccountDetails",
      data: data,
    });
  };

  // submit functions for input fields
  function submitEmail(email: string): void {
    setEmail(email);
  }
  function submitFirstName(firstName: string): void {
    setFirstName(firstName);
  }

  // update user info function
  const updateAccountInfo = () => {
    updateUserData(data.token)
      ?.then((data: ResponseData) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={tw`mt-10 ml-5 mr-5`}>
      <View style={tw`w-full mt-2 p-1 flex flex-row justify-between`}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={tw`p-3`}
        >
          <FontAwesome name="arrow-left" size={20} style={tw`text-red-800`} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`w-full pb-100`}
      >
        <View style={tw`w-full h-40 mt-5 items-center content-center`}>
          <Image
            source={{
              uri: "https://e-limi.africa/uploads/user_image/placeholder.png",
            }}
            style={[tw`h-40 w-40 rounded-full`, { resizeMode: "contain" }]}
          />
          <View>
            <Text style={tw`font-bold text-center text-2xl mt-5`}>
              {data.first_name}
            </Text>
            <Text style={tw`font-bold text-center text-3xl`}>
              {data.last_name}
            </Text>
          </View>
        </View>
        {/* User Details Container */}
        <View style={tw`p-1 mt-23`}>
          {/* Input fields to fill in user information */}
          <View style={tw`p-3`}>
            <Input
              placeholder="Email"
              style={tw`bg-gray-200 mt-2 p-4 rounded-lg`}
            />
            <Input
              placeholder="Password"
              style={tw`bg-gray-200 p-4 mt-4 rounded-lg`}
            />
          </View>
          {/* Update Account Button */}
          <View style={tw`p-3`}>
            <TouchableOpacity
              style={tw`p-3 mt-3 bg-green-600 items-center content-center w-full rounded-lg`}
            >
              <Text style={tw`font-bold text-white text-lg`}>
                Update Account
              </Text>
            </TouchableOpacity>
          </View>
          {/* Logout Button */}
          <View style={tw`p-3`}>
            <TouchableOpacity
              style={tw`p-3 bg-red-800 items-center content-center w-full rounded-lg`}
              onPress={logout}
            >
              <Text style={tw`font-bold text-white text-lg`}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
