import { StatusBar } from "expo-status-bar";
import { Button, Text, useColorModeValue } from "native-base";
import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { PublicStackScreenProps } from "../../auth/types";

const { width, height } = Dimensions.get("window");

const LandingScreen: React.FC<PublicStackScreenProps<"Landing">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={styles.image}
          source={{uri: 'https://images.unsplash.com/photo-1660102298137-0c905212d917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'}}
        />
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.messageContainer}>
          <Text fontSize="3xl" style={styles.header}>
            Sweep Alert
          </Text>

          <Text
            color={useColorModeValue("light.400", "muted.400")}
            fontSize="lg"
            style={styles.sub}
          >
            my app hook
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <Button
            size="sm"
            colorScheme="primary"
            onPress={() => navigation.navigate("Login")}
          >
            <Text fontSize="md" style={styles.btnLabel}>
              Sign In
            </Text>
          </Button>

          <Button
            style={{ marginTop: 15 }}
            variant="outline"
            colorScheme='primary'
            onPress={() => navigation.navigate("Login")}
          >
            <Text fontSize="md" style={styles.btnLabel}>
              Register
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  image: {
    width: width,
    height: height,
    justifyContent: "center",
  },
  actionContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  actionButtons: {
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  messageContainer: {
    justifyContent: "space-between",
    marginBottom: 75,
    paddingHorizontal: 35,
  },
  btnLabel: {
    color: "#fff",
    fontFamily: "Roboto_500Medium",
    paddingVertical: 3,
  },
  header: {
    color: "#fff",
    fontFamily: "Roboto_500Medium",
    paddingVertical: 3,
    textAlign: "center",
  },
  sub: {
    fontFamily: "Roboto_500Medium",
    paddingVertical: 3,
    textAlign: "center",
  },
});
