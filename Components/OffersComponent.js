import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

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

export default function OffersComponent() {
  return (
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
  );
}

const styles = StyleSheet.create({});
