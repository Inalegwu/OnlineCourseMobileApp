// author : Ikwue Inalegwu
// Email:ikwueinalegwu@gmail.com
// phone : (+234) 070 8096 8858
// Company : Cstemp Edutech
import { LogBox } from "react-native";
import { useState } from "react";
import React from "react";
import IntroSlider from "./Components/IntroSlider";
import Main from "./Components/Main";
import Home from "./Screens/Home";
import { NetworkContext } from "./Components/ContextProvider";
import { StatusBar } from "expo-status-bar";

//! log files that don't affect the running of the application
//! careless warnings
//! i should really look into the long term effect of these warnings
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
  // context if data is not null , wrap application in network context and pass data
  if (userData == null) {
    return (
      <>
        {showIntro && <IntroSlider handleDone={handleShowIntro} />}
        {!showIntro && <Main />}
      </>
    );
  } else {
    <>
      <StatusBar style="light" />
      <NetworkContext.Provider value={userData}>
        {/* if the token value of the data is null , re render with the app intro slider else return only app */}
        {userData.token != null ? (
          // <Main />
          <Home />
        ) : (
          [
            <IntroSlider handleDone={handleShowIntro} /> && <Main />,
            !showIntro && <Main />,
          ]
        )}
      </NetworkContext.Provider>
      ;
    </>;
  }
}
