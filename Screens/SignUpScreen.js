import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import SignUp from "../components/forms/SignUp";
import Divider from "../components/common/Divider";
import Logo from "../assets/logo.png";

const SignUpScreen = ({ navigation }) => {
  return (
    // SAFE AREA VIEW SO THAT STATUS BAR DOESN'T OVERLAP WITH VIE
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        fadingEdgeLength={250}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.header}>Sign Up</Text>
          <SignUp />
          <Divider />
          <TouchableOpacity
            style={styles.joinUs}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.joinUsText}>Already One of US?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flexGrow: 1,

    padding: 28,
  },
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
  },
  header: {
    fontSize: 66,
    textAlign: "center",
    fontWeight: "100",
    color: "#2E2E2E",
    fontFamily: "NunitoSans_700Bold",
  },
  joinUs: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  joinUsText: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 16,
    color: "#1C6BA4",
  },
  logo: {
    width: 400,
    height: 200,
  },
});
