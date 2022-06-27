import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import IntroSlider from "./Components/IntroSlider";
import Main from "./Components/Main";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleShowIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroSlider handleDone={handleShowIntro} />}
      {!showIntro && <Main />}
    </>
  );
}

const styles = StyleSheet.create({});
