// author : Ikwue Inalegwu
// email :ikwueinalegwu@gmail.com
// phone number : (+234) 708 096 8858

import { createStackNavigator } from "@react-navigation/stack";
import CourseDetails from "./SubScreens/CourseDetails";
import RenderHome from "./SubScreens/RenderHome";
import AccountDetails from "./SubScreens/AccountDetails";
import { NetworkContext } from "../../Components/ContextProvider";
import React from "react";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";

const Stack = createStackNavigator();

export default function HomeScreen() {
  useDeviceContext(tw, { withDeviceColorScheme: true });

  const contextData = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={contextData}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={RenderHome} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}
