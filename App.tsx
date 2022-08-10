import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapPage from "./components/MapPage";
import AddCarPage from "./components/AddCarPage";
import AllCarsPage from "./components/AllCarsPage";
import LoginPage from "./features/auth/screens/LoginScreen";
import CurrentAlarms from "./components/CurrentAlarms";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RoutesPage from "./components/RoutesPage";
import DetailedRoutes from "./components/DetailedRoutes";
import Dashboard from "./components/Dashboard";

import SavedAddresses from "./components/SavedAddresses";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { store } from "./store/store";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import { theme } from "./theme";

// LogBox.ignoreLogs([
//   "warning you want to remove",
//   "EventEmitter.removeListener('appStateDidChange', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
//   "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s, a useEffect cleanup function,",
// ]);

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            <Navigation />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default MyStack;

/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          {/* 
          <Stack.Screen
            name="MapPage"
            component={MapPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddCarPage"
            component={AddCarPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AllCarsPage"
            component={AllCarsPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CurrentAlarms"
            component={CurrentAlarms}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RoutesPage"
            component={RoutesPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DetailedRoutes"
            component={DetailedRoutes}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SavedAddresses"
            component={SavedAddresses}
            options={{ headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer> */
