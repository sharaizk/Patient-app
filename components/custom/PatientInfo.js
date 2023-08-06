import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PatientInfo = ({ title, detail, variant = "small" }) => {
  return (
    <View
      style={{
        ...styles.container,
        width: variant === "large" ? "100%" : "45%",
        flexGrow: variant === "large" ? 1 : 0.45,
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

export default PatientInfo;

const styles = StyleSheet.create({
  container: {
    // width: "30%",
    backgroundColor: "#E8EBED",
    padding: 20,
    borderRadius: 25,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    color: "#253141",
  },
  detail: {
    fontFamily: "NunitoSans_700Bold",
    letterSpacing: 0.5,
    fontSize: 18,
  },
});
