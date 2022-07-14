import { Text, View } from "react-native";
import { NetworkContext } from "../../Components/ContextProvider";
import RenderCart from "./CartSubScreens/renderCart";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function CartScreen() {
  const { data } = React.useContext(NetworkContext);
  return (
    <NetworkContext.Provider value={data}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cartScreen" component={RenderCart} />
      </Stack.Navigator>
    </NetworkContext.Provider>
  );
}
