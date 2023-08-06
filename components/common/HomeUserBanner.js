import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Avatar from "../custom/Avatar";
import { useSelector } from "react-redux";
const HomeUserBanner = () => {
  const user = useSelector(({ authSlice }) => authSlice);

  return (
    <View style={styles.container}>
      <View style={styles.children1}>
        <Text style={styles.helloText}>👋 Hello!</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.children2}>
        <Avatar />
      </View>
    </View>
  );
};

export default HomeUserBanner;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  children1: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    flex: 0.5,
    gap: 7,
  },
  helloText: {
    fontSize: 18,
    fontFamily: "NunitoSans_600SemiBold",
  },
  name: {
    fontSize: 26,
    fontFamily: "NunitoSans_700Bold",
  },
  children2: {
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
