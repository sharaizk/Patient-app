import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PageHeader from "../components/common/PageHeader";
import EditPatientForm from "../components/forms/EditPatientForm";

const EditPatient = ({ navigation, route }) => {
  const patientInfo = route.params.patientInfo;
  const patientId = route.params.patientId;
  const goBack = () => {
    navigation.goBack("");
  };
  return (
    <View style={{ flex: 1 }}>
      <PageHeader goBack={goBack} title="Edit Patient" showEdit={false} />
      <ScrollView
        contentContainerStyle={styles.detailContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          height: "100%",
          flexGrow: 1,
          marginBottom: 20,
        }}
      >
        <EditPatientForm defaultValues={patientInfo} patientId={patientId} />
      </ScrollView>
    </View>
  );
};

export default EditPatient;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 28,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 0,
    backgroundColor: "#fff",
  },
});
