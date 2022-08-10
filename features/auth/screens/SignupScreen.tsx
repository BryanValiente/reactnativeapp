import {
  Box,
  Button,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import { StyleSheet, Platform } from "react-native";

import { useSignUp } from "../hooks/useSignUp";
import { Octicons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { Controller } from "react-hook-form";

/**
 * Renders the Login form. Users can log in using their
 * email and password.
 * @param param0
 * @returns
 */
const SignUp = () => {
  // login form state
  const { fields, control, isSubmitting, validation, getFieldType, submit } =
    useSignUp();

  // get form validation
  const {
    errors,
    showPass,
    showPassConfirm,
    togglePassVisibility,
    togglePassConfirmVisibility,
  } = validation;

  console.log(errors);
  return (
    <Box
      backgroundColor={"white"}
      alignItems="center"
      justifyContent="flex-start"
      h={"100%"}
    >
      <StatusBar style="dark" />

      <View
        style={{
          flex: 1,
          marginTop: 20,
          width: "100%",
        }}
      >
        <KeyboardAvoidingView
          h={{
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
          paddingX={7}
        >
          <Box w="100%" paddingBottom={150}>
            <Text fontSize={"3xl"} fontFamily="Roboto_700Bold" mb={1} mt={5}>
              Sign up
            </Text>

            <Text
              fontSize={"md"}
              fontFamily="Roboto_500Medium"
              color="light.500"
              mb={8}
            >
              Hello, create an account with your email
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

                    {field.name === "password" ||
                    field.name === "confirmPassword" ? (
                      <Stack
                        alignItems={"center"}
                        justifyContent="center"
                        px={2}
                        ml={2}
                      >
                        <Button
                          variant="unstyled"
                          onPress={
                            field.name === "password"
                              ? togglePassVisibility
                              : togglePassConfirmVisibility
                          }
                        >
                          {showPass ? (
                            <Octicons name="eye" size={24} color="black" />
                          ) : (
                            <Octicons
                              name="eye-closed"
                              size={24}
                              color="black"
                            />
                          )}
                        </Button>
                      </Stack>
                    ) : null}
                  </Stack>
                </Stack>
              </FormControl>
            ))}

            <Stack mt={1} mb="7">
              <Button
                shadow={"3"}
                isLoading={isSubmitting}
                spinnerPlacement="end"
                isLoadingText="Submitting"
                onPress={submit}
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        </KeyboardAvoidingView>
      </View>
    </Box>
  );
};

export default SignUp;

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
