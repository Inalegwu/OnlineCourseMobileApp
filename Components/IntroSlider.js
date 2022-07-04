import "react-native-gesture-handler";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

// slides data
const slides = [
  {
    key: "one",
    image: require("../assets/images/2.png"),
    text: "We provide the best learning courses at affordable prices",
  },
  {
    key: "two",
    image: require("../assets/images/4.png"),
    text: "Learn from the best Artisans in your Field",
  },
  {
    key: "three",
    image: require("../assets/images/2.png"),
    text: "Be fully equipped to live a better life",
  },
];

export default function IntroSlider(props) {
  // render pages of the intro slider
  const _renderItem = ({ item }) => {
    return (
      <View style={tw`p-5 items-center text-center`}>
        <Text style={tw`font-extrabold text-xl`}>{item.title}</Text>
        <Image
          style={[tw`h-100 w-100`, { resizeMode: "contain" }]}
          source={item.image}
        />
        <Text style={tw`text-4xl ml-1 mt-10 text-center font-extrabold`}>
          {item.text}
        </Text>
      </View>
    );
  };
  const keyExtractor = (item) => item.key;
  //   render the next btn
  const _renderNextBtn = () => {
    return (
      <View style={tw`p-4`}>
        <Text style={tw`text-red-800 font-bold mr-2`}>Next</Text>
      </View>
    );
  };
  //   renders the done Btn
  const _renderDoneBtn = () => {
    return (
      <View style={tw`p-4 mr-2`}>
        <Text style={tw`text-red-800 font-bold`}>Done</Text>
      </View>
    );
  };

  const _renderPrevBtn = () => {
    return (
      <View style={tw`p-4 mr-2`}>
        <Text style={tw`text-red-800 font-bold`}>Previous</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <>
      <StatusBar style="dark" />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        keyExtractor={keyExtractor}
        activeDotStyle={{ backgroundColor: "#8D161A" }}
        renderNextButton={_renderNextBtn}
        renderDoneButton={_renderDoneBtn}
        renderPrevButton={_renderPrevBtn}
        onDone={handleDone}
      />
    </>
  );
}
