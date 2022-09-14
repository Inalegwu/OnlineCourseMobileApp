// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 0708 096 8858
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
  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);

  // initialize variable data and set it's default to null
  let userData: any = null;

  const handleShowIntro = () => {
    setShowIntro(false);
  };

  if (hasLoggedIn == false) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* {showIntro && <IntroSlider handleDone={handleShowIntro} />}
      {!showIntro && <Main />} */}
        <Main />
      </GestureHandlerRootView>
    );
  } else {
    return (
      <GestureHandlerRootView>
        <Home hasLoggedIn={hasLoggedIn} />
      </GestureHandlerRootView>
    );
  }
}
