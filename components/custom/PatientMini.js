import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const PatientMini = ({ item, onNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onNavigate(item.id);
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/flat-nurse-with-patient_23-2148158494.jpg?w=1380",
        }}
        resizeMode="contain"
        style={styles.patientImage}
      />
      <View style={styles.patientDetailContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.age}>Age: {item.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PatientMini;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
    height: 100,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },

  patientImage: {
    height: 100,
    width: 100,
    borderRadius: 18,
  },
  patientDetailContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
  },
  age: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
  },
});
