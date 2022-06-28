import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { ScrollView } from "react-native-gesture-handler";
import TutorItem from "./TutorItem";

const tutors = [
  {
    id: 1,
    name: "Ayomide Kekere-Ekun",
    artistry: "Carpenter",
    image: require("../assets/images/person.jpg"),
  },
  {
    id: 2,
    name: "James McAvoy",
    artistry: "Carpenter",
    image: require("../assets/images/person1.jpg"),
  },
  {
    id: 3,
    name: "Boluwatife Onyeokoro",
    artistry: "Carpenter",
    image: require("../assets/images/person2.jpg"),
  },
  {
    id: 4,
    name: "David Spade",
    artistry: "Carpenter",
    image: require("../assets/images/person3.jpg"),
  },
  {
    id: 5,
    name: "John Doe",
    artistry: "Carpenter",
    image: require("../assets/images/person3.jpg"),
  },
];

export default function TopTutors() {
  return (
    <View style={tw`p-5 justify-start`}>
      <View style={tw`flex flex-row justify-around`}>
        <Text style={tw`text-red-800 font-bold ml-4`}>Top Tutors</Text>
        <TouchableOpacity>
          <Text style={tw`text-red-800 text-right w-70 mr-3 font-bold`}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={tw`mt-2`}>
        {tutors.map((item) => {
          return (
            <TutorItem
              key={item.id}
              name={item.name}
              artistry={item.artistry}
              image={item.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
