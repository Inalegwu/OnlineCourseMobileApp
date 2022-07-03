// author : Ikwue Inalegwu
// email :ikwueinalegwu@gmail.com
// phone number : (+234) 708 096 8858

import { createStackNavigator } from "@react-navigation/stack";
import CourseDetails from "./SubScreens/CourseDetails";
import RenderHome from "./SubScreens/RenderHome";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={RenderHome} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
    </Stack.Navigator>
  );
}
