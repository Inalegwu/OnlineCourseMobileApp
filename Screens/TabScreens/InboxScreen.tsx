import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { NetworkContext } from "../../Components/ContextProvider";
import { createStackNavigator } from "@react-navigation/stack";
import renderInbox from "./InboxSubScreens/renderInbox";
import MessageDetails from "./InboxSubScreens/MessageDetails";

const Stack = createStackNavigator();

export default function InboxScreen() {
  const data = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={data}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InboxScreen" component={renderInbox} />
        <Stack.Screen name="MessageDetails" component={MessageDetails} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}

const styles = StyleSheet.create({});
