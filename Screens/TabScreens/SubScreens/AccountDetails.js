import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Input from "../../../Components/Input";

export default function AccountDetails({ navigation }) {
  const data = React.useContext(NetworkContext);

  const logout = () => {
    data.token = "";
    navigation.navigate("Login");
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
        <ScrollView>
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder={data.first_name}
          />
          <Input
            style={tw`p-4 mt-3 bg-gray-200 rounded-xl`}
            placeholder={data.last_name}
          />

          <TouchableOpacity
            style={tw`p-3 mt-3 bg-red-600 items-center content-center w-full rounded-lg`}
            onPress={logout}
          >
            <Text style={tw`font-bold text-white text-lg`}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
