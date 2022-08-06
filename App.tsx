import { Text, View, LogBox } from "react-native";
import { useState } from "react";
import React from "react";
import IntroSlider from "./Components/IntroSlider";
import Main from "./Components/Main";
import { RootSiblingParent } from "react-native-root-siblings";
import { NetworkContext } from "./Components/ContextProvider";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  // initialize variable data and set it's default to null
  let userData = null;
  // check if network context is null . if so , leave data as null if not , set data to the value of network context
  // handles the action of done button of app intro slider
  const handleShowIntro = () => {
    setShowIntro(false);
  };
  // if the value of data is null return the app without the network
  // context if data is not null , wrap application in network context and pass data
  if (userData == null) {
    return (
      <>
        <RootSiblingParent>
          {showIntro && <IntroSlider handleDone={handleShowIntro} />}
          {!showIntro && <Main />}
        </RootSiblingParent>
      </>
    );
  } else {
    <>
      <StatusBar style="light" />
      <NetworkContext.Provider value={userData}>
        <RootSiblingParent>
          {/* if the token value of the data is null , re render with the app intro slider else return only app */}
          {userData.token != null ? (
            <Main />
          ) : (
            [
              <IntroSlider handleDone={handleShowIntro} /> && <Main />,
              !showIntro && <Main />,
            ]
          )}
        </RootSiblingParent>
      </NetworkContext.Provider>
      ;
    </>;
  }
}
