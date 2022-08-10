/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";

// screens for public routes
export type PublicStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
};

// Screen props for public routes
export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, Screen>;

const linking: LinkingOptions<PublicStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Landing: "Landing",
      Login: "Login",
      SignUp: "SignUp",
    },
  },
};

export default linking;
