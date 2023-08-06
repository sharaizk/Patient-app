import { StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../custom/InputField";
import CustomButton from "../custom/CustomButton";
import { emailRegex } from "../../helpers/regex";
import authInstance from "../../axios/authInstance";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const signUpResponse = await authInstance.post("/sign-up", {
        ...data,
      });
      if (signUpResponse.status) {
        navigation.navigate("LoginScreen");
      }
      setLoading(false);
    } catch (error) {
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
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Enter your Name"
            iconName="user"
            value={value}
            onBlur={onBlur}
            error={errors?.name?.message}
            onChangeText={(value) => onChange(value)}
            secureText={false}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Name is required",
          },
        }}
      />

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
      {errors?.general?.message && (
        <Text style={styles.error}>*{errors?.general?.message}</Text>
      )}
      <CustomButton
        title="SignUp"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  fields: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
  error: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#F73859",
  },
});
