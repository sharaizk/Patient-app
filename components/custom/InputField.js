import { View, StyleSheet, TextInput, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const InputField = ({
  iconName,
  placeholder,
  value,
  onBlur,
  onChangeText = () => {},
  error = "",
  secureText = false,
  keyboardType = "default",
  multiline = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {iconName && <AntDesign name={iconName} size={28} color="#8AA0BC" />}
        <TextInput
          style={(styles.fieldInput, multiline && styles.multiline)}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          multiline={multiline}
        />
      </View>
      {error && <Text style={styles.error}>*{error}</Text>}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: "#EEF6FC",
    borderRadius: 18,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: 10,
  },
  fieldInput: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 18,
  },
  error: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#F73859",
  },
  multiline: {
    height: 200,
  },
});
