
import {
  Box,
  Button,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Stack,
  Text,
} from "native-base";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Platform } from "react-native";
import { useLogIn } from "../hooks/useLogin";
import { PublicStackScreenProps } from "../types";

/**
 * Renders the Login form. Users can log in using their
 * email and password.
 * @param param0
 * @returns
 */
const LoginScreen: React.FC<PublicStackScreenProps<"Login">> = (props) => {
  // get react native navigation
  const { navigation } = props;
  // login form hook
  const { fields, control, isSubmitting, errors, submit, getFieldType } =
    useLogIn();

  return (
    <>
      <Box
        backgroundColor={"white"}
        alignItems="center"
        justifyContent="flex-start"
        h={"100%"}
      >
        <KeyboardAvoidingView
          h={{
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
          w="100%"
          paddingX="8"
        >
          <Box w="100%">
            <Text fontSize={"3xl"} fontFamily="Roboto_700Bold" mb={1} mt={5}>
              Log in
            </Text>

            <Text
              fontSize={"md"}
              fontFamily="Roboto_500Medium"
              color="light.500"
              mb={8}
            >
              Hello, welcome back
            </Text>

            {fields.map((field) => (
              <FormControl
                key={field.name}
                isInvalid={`${field.name}` in errors}
              >
                <Stack>
                  <FormControl.Label>{field.label}</FormControl.Label>

                  <Stack flexDirection={"row"}>
                    <Controller
                      name={field.name}
                      control={control}
                      render={({ field: { onChange, onBlur, value } }: any) => (
                        <Input
                          autoFocus={false}
                          isFocused={false}
                          flex={1}
                          onBlur={onBlur}
                          placeholder={field.placeholder}
                          onChangeText={(val) => onChange(val)}
                          value={value}
                          keyboardType={field.keyboardType}
                          type={field.type}
                        />
                      )}
                    />
                  </Stack>
                </Stack>
              </FormControl>
            ))}

            <Stack mb="7">
              <Button
                shadow={"3"}
                isLoading={isSubmitting}
                spinnerPlacement="end"
                isLoadingText="Submitting"
                onPress={submit}
              >
                Log in
              </Button>
            </Stack>

            <Stack
              mb="7"
              flexDirection={"row"}
              alignItems="center"
              justifyContent={"center"}
            >
              <Text>Don't have an account?</Text>
              <Button
                variant={"link"}
                ml={0}
                px={2}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign up
              </Button>
            </Stack>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  keyboardView: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
