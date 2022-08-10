import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { KeyboardTypeOptions } from "react-native";
import { useState } from "react";

export type SignUpControlField = {
  placeholder: string;
  label: string;
  name: "name" | "email" | "password" | "confirmPassword";
  keyboardType: KeyboardTypeOptions;
  type: "text" | "password";
};

const fields: SignUpControlField[] = [
  {
    label: "Name",
    name: "name",
    keyboardType: "default",
    type: "text",
    placeholder: "",
  },
  {
    label: "Email",
    name: "email",
    keyboardType: "email-address",
    type: "text",
    placeholder: "",
  },
  {
    label: "Password",
    name: "password",
    keyboardType: "default",
    type: "password",
    placeholder: "",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    keyboardType: "default",
    type: "password",
    placeholder: "",
  },
];

const defaultValues = {
  name: "Roberto Sanchez",
  email: "robsanchez1772@gmail.com",
  password: "g00gle13",
  confirmPassword: "g00gle13",
};

const schema = yup.object({
  name: yup
    .string()
    .min(1, "Name must be at least 1 character long")
    .max(200)
    .required(),
  email: yup.string().email("Email is invalid").required("Email is invalid"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(200)
    .required("Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .test(
      "match",
      "Passwords do not match",
      (val, context) => val === context.parent.password
    )
    .required("Passwords do not match"),
});

export const useSignUp = () => {
  // toggle between hidden/shown password
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log("submit");
    console.log(data);
  };

  /**
   * Toggles password visibility
   */
  const togglePassVisibility = () => {
    setShowPass(!showPass);
  };

  /**
   * Toggles password confirmation visibility
   */
  const togglePassConfirmVisibility = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  const getFieldType = (name: string, type: "text" | "password") => {
    if (name === "password") return showPass ? "text" : type;
    if (name === "confirmPassword") return showPassConfirm ? "text" : type;
    return type;
  };

  return {
    fields,
    control,
    validation: {
      errors,
      showPass,
      showPassConfirm,
      togglePassVisibility,
      togglePassConfirmVisibility,
    },
    getFieldType,
    isSubmitting,
    submit: handleSubmit(onSubmit),
  };
};
