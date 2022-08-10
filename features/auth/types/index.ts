import { NativeStackScreenProps } from "@react-navigation/native-stack";

// screens for public routes
export type PublicStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
};

// Screen props for public routes
export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, Screen>;
