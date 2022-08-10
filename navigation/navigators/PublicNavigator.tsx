import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "../../features/auth/screens/LoginScreen";
import SignupScreen from "../../features/auth/screens/SignupScreen";
import LandingScreen from "../../features/misc/screens/LandingScreen";
import { PublicStackParamList } from "../config/PublicLinkingConfiguration";


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        animation: "slide_from_left",
        orientation: "portrait_up",
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
