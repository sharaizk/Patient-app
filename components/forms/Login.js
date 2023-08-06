import { StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import InputField from "../custom/InputField";
import CustomButton from "../custom/CustomButton";
import { emailRegex } from "../../helpers/regex";
import authInstance from "../../axios/authInstance";
import { logInUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const loginResponse = await authInstance.post("/log-in", {
        ...data,
      });

      if (loginResponse.status === 200) {
        await AsyncStorage.setItem(
          "authToken",
          JSON.stringify(loginResponse.data.token)
        );
        dispatch(logInUser(loginResponse.data));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        Alert.alert(error.response?.data?.error);
      } else {
        Alert.alert("Something went wrong");
      }
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.fields}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Enter your Email"
            iconName="mail"
            value={value}
            onBlur={onBlur}
            error={errors?.email?.message}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: emailRegex,
            message: "It's not a valid email",
          },
        }}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Enter your password"
            iconName="key"
            value={value}
            onBlur={onBlur}
            error={errors?.password?.message}
            onChangeText={(value) => onChange(value)}
            secureText={true}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Password is required",
          },
          minLength: {
            value: 5,
            message: "Password is too short",
          },
        }}
      />
      <CustomButton
        title="Login"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  fields: {
    marginHorizontal: 20,
    marginTop: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
});
