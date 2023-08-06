import { StyleSheet, KeyboardAvoidingView, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../custom/InputField";
import CustomButton from "../custom/CustomButton";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useNavigation } from "@react-navigation/native";
import patientInstance from "../../axios/patientInstance";

const EditPatientForm = ({ defaultValues, patientId }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      ...defaultValues,
    },
  });
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const updatePatientResponse = await patientInstance.put(
        `/update/${patientId}`,
        {
          ...data,
        }
      );

      if (updatePatientResponse.status === 200) {
        navigation.goBack();
      }
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
            placeholder="Enter patient's name"
            value={value}
            onBlur={onBlur}
            error={errors?.email?.name}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Patient's name is required",
          },
        }}
      />

      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value, onBlur } }) => (
          <RadioButtonGroup
            containerStyle={{
              marginBottom: 10,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 16,
            }}
            selected={value}
            onSelected={(value) => onChange(value)}
            radioBackground="#1C6BA4"
            size={30}
          >
            <RadioButtonItem
              value="Male"
              label={<Text style={styles.radioLabel}>Male</Text>}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            />
            <RadioButtonItem
              value="Female"
              label={<Text style={styles.radioLabel}>Female</Text>}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            />
          </RadioButtonGroup>
        )}
      />

      <Controller
        control={control}
        name="age"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Enter patient's age"
            value={value.toString()}
            onBlur={onBlur}
            error={errors?.email?.age}
            keyboardType="numeric"
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Patient's age is required",
          },
        }}
      />
      <Controller
        control={control}
        name="contactInformation"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Enter patient's contact number"
            value={value.toString()}
            onBlur={onBlur}
            error={errors?.email?.age}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Patient's number is required",
          },
        }}
      />
      <Controller
        control={control}
        name="healthHistory"
        render={({ field: { onChange, value, onBlur } }) => (
          <InputField
            placeholder="Detail health history of patient"
            value={value}
            onBlur={onBlur}
            error={errors?.email?.age}
            multiline={true}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Patient's health history is required",
          },
        }}
      />
      <CustomButton
        title="Update Patient"
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
      />
    </KeyboardAvoidingView>
  );
};

export default EditPatientForm;

const styles = StyleSheet.create({
  fields: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
  radioLabel: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    marginLeft: 10,
  },
});
