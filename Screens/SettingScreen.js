import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const SettingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>WILL ARRIVE SOON!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 28,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "NunitoSans_700Bold",
    color:'#1C6BA4'
  },
});
