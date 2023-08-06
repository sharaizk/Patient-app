import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Divider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.dividerLine} />
    </View>
  );
};

export default Divider;
const styles = StyleSheet.create({
  dividerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  dividerLine: {
    width: "40%",
    height: 1,
    backgroundColor: "#BECADA",
  },
  orText: {
    fontFamily: "NunitoSans_400Regular",
  },
});
