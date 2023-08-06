import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import HomeUserBanner from "../components/common/HomeUserBanner";
import PatientList from "../components/common/PatientList";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HomeUserBanner />
        <PatientList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flexGrow: 1,
    padding: 28,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 280,

    flexDirection: "column",
  },
});
