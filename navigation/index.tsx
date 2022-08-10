import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useAppSelector } from "../store/hooks";
import { getUser } from "../store/slices/userSessionSlice";
import PublicLinkingConfiguration from "./config/PublicLinkingConfiguration";
import { PublicNavigator } from "./navigators/PublicNavigator";

export default function Navigation() {
  const user = useAppSelector(getUser);

  console.log(user);
  if (user) {
    return null;
  }

  return (
    <NavigationContainer linking={PublicLinkingConfiguration}>
      <PublicNavigator />
    </NavigationContainer>
  );
}
