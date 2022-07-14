import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Input from "../../../Components/Input";
import * as ImagePicker from "expo-image-picker";
import * as API from "../../../data/remote/userApiCalls";

export default function AccountDetails({ navigation }) {
  const data = React.useContext(NetworkContext);
  const [image, setImage] = useState("../../../assets/images/avatar.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  // select image from users image library
  //TODO take image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const logout = () => {
    data.token = "";
    navigation.navigate("Login", {
      previousScreen: "AccountDetails",
    });
  };

  // submit functions for input fields
  const submitFirstName = (firstName) => {
    setFirstName(firstName);
  };
  const submitLastName = (lastName) => {
    setLastName(lastName);
  };
  const submitLinkedIn = (linkedIn) => {
    setLinkedIn(linkedIn);
  };
  const submitEmail = (email) => {
    setEmail(email);
  };
  const submitTwitter = (twitter) => {
    setTwitter(twitter);
  };

  // update user info function

  const updateUserInfo = () => {
    if (email == "" || firstName == "") {
      alert("Fill In Fields");
    } else {
      console.log("Updating User Info...");
      API.updateUserData(data.token)
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        <View style={tw`w-full h-40 mt-8 items-center content-center`}>
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
        <View style={tw`p-1 mt-23`}>
          <Text
            style={tw`text-left mt-5 text-lg left-3 font-bold text-gray-500`}
          >
            Edit Details
          </Text>
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder="First Name"
            submit={submitFirstName()}
          />
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder="Last Name"
            submit={submitLastName()}
          />
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder="Email"
            submit={submitEmail()}
          />
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder="LinkedIn"
            submit={submitLinkedIn()}
          />
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder="Twitter"
          />
          <TouchableOpacity
            style={tw`p-3 mt-3 bg-green-600 mt-3 items-center content-center w-full rounded-lg`}
            onPress={() => {
              console.log("dont change anything bozo");
            }}
          >
            <Text style={tw`font-bold text-white text-lg`}>Update Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-3 mt-3 bg-red-600 items-center content-center w-full rounded-lg`}
            onPress={logout}
          >
            <Text style={tw`font-bold text-white text-lg`}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
