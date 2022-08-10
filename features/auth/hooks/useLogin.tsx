import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { KeyboardTypeOptions } from "react-native";
import { useState } from "react";
import { setUser } from "../../../store/slices/userSessionSlice";
import { useAppDispatch } from "../../../store/hooks";

export type LoginControlField = {
  label: string;
  name: 'email'|'password';
  keyboardType: KeyboardTypeOptions;
  errorMessage: string;
  placeholder: string;
  type: "text" | "password";
};

const fields: LoginControlField[] = [
  {
    label: "Email",
    name: "email",
    keyboardType: "email-address",
    errorMessage: "Not a valid email",
    type: "text",
    placeholder: ''
  },
  {
    label: "Password",
    name: "password",
    keyboardType: "default",
    errorMessage: "Password not provided",
    type: "password",
    placeholder: ''
  },
];

const defaultValues = {
  email: "robsanchez1772@gmail.com",
  password: "g00gle13",
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const useLogIn = () => {
  // toggle between hidden/shown password
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  // get redux dispatcher
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(
      setUser({
        firstName: "Roberto",
        lastName: "Sanchez",
        email: "robb1772@gmail,.com",
        profileImage:
          "https://ca.slack-edge.com/T17R4TFAM-U1JV6Q8G5-8bf2a9512d7b-512",
      })
    );
  };

  /**
   * Returns input field type (text | password) bassed on the
   * field type and name
   * @param name name of the field
   * @param type field type
   * @returns 
   */
  const getFieldType = (name: string, type: "text" | "password") => {
    if (name === "password") return showPass ? "text" : type;
    return type;
  };

  return {
    fields,
    control,
    errors,
    isSubmitting,
    submit: handleSubmit(onSubmit),
    getFieldType,
  };
};
