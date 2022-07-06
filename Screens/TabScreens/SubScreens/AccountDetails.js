import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { NetworkContext } from "../../../Components/ContextProvider";

export default function AccountDetails() {
  const data = React.useContext(NetworkContext);
  return (
    <>
      <View style={tw`mt-10 ml-5 mr-5`}>
        <View style={tw`w-full content-center items-center`}>
          <Image source={{ uri: data.thumbnail }} style={tw`h-20 w-20`} />
          <View>
            <Text style={tw`font-bold text-center text-2xl mt-5`}>
              {data.first_name}
            </Text>
            <Text style={tw`font-bold text-center text-xl`}>
              {data.last_name}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
