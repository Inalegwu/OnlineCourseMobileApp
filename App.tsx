// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 070 8096 8858
// Company : Cstemp Edutech
import { LogBox, Text } from "react-native";
import { useState } from "react";
import React from "react";
import IntroSlider from "./Components/IntroSlider";
import Main from "./Components/Main";
import Home from "./Screens/Home";
import { NetworkContext } from "./Components/ContextProvider";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//! log files that don't affect the running of the application
//! careless warnings
//! I should really look into the long term effect of these warnings
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // initialize variable data and set it's default to null
  let userData: any = null;

  // check if network context is null . if so , leave data as null if not , set data to the value of network context
  const handleShowIntro = () => {
    setShowIntro(false);
  };
  // if the value of data is null return the app without the network
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {showIntro && <IntroSlider handleDone={handleShowIntro} />}
      {!showIntro && <Main />}
    </GestureHandlerRootView>
  );
}
