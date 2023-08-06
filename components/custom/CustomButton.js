import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import React from "react";

const CustomButton = ({
  title = "",
  onPress,
  variant = "primary",
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "danger" ? styles.danger : ""]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color="#000" />
      ) : (
        <Text
          style={[styles.text, variant === "danger" ? styles.dangerText : ""]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 18,
    width: "100%",
    backgroundColor: "#FAF0DB",
    alignItems: "center",
    borderRadius: 18,
  },
  danger: {
    backgroundColor: "#f43858",
  },
  text: {
    fontSize: 20,
    fontFamily: "NunitoSans_700Bold",
  },
  dangerText: {
    color: "#fff",
  },
});
