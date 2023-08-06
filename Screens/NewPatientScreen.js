import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import NewPatient from "../components/forms/NewPatient";

const NewPatientScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.formContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.head}>
          <Text style={styles.headText}>Add New Patient</Text>
        </View>
        <View style={styles.container}>
          <NewPatient />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPatientScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 28,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingTop: 0,
  },
  head: {
    height: 200,
    width: "100%",
    backgroundColor: "#1C6BA4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontFamily: "NunitoSans_700Bold",
    color: "#fff",
    fontSize: 24,
  },
  formContainer: {
    width: "100%",
    height: "100%",
    marginBottom: 90,
  },
});
