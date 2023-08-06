import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import PatientInfo from "../components/custom/PatientInfo";
import CustomButton from "../components/custom/CustomButton";
import patientInstance from "../axios/patientInstance";
import { useIsFocused } from "@react-navigation/native";
import { fetchAllPatients } from "../redux/patientSlice";
import { useDispatch, useSelector } from "react-redux";

const PatientDetail = ({ route, navigation }) => {
  const patientId = route.params.itemId;
  const [patientInfo, setPatientInfo] = useState({});
  const page = useSelector(({ patientSlice }) => patientSlice.page);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patientResponse = await patientInstance.get(
          `/patients/${patientId}`
        );
        setPatientInfo(patientResponse.data.patient);
      } catch (error) {
        console.log(error);
      }
    };
    if (isFocused) {
      fetchPatient();
    }
  }, [isFocused]);

  const goBack = () => {
    navigation.goBack();
  };

  const goEdit = () => {
    navigation.navigate("EditPatient", {
      patientId,
      patientInfo,
    });
  };

  const handleDelete = async () => {
    try {
      const deletePatientResponse = await patientInstance.delete(
        `/delete/${patientId}`
      );

      if (deletePatientResponse.status === 200) {
        dispatch(fetchAllPatients({ page }));
        goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickDelete = () => {
    Alert.alert("Aer you sure?", "You won't be able to restore this choice", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Yes", onPress: handleDelete },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#fff",
      }}
    >
      <PageHeader goBack={goBack} title="Patient Details" goEdit={goEdit} />
      {patientInfo.name ? (
        <View style={styles.detailContainer}>
          {/* BANNER DETAIL VIEW: */}
          <View style={styles.bannerDetail}>
            <Image
              source={{
                uri: "https://img.freepik.com/premium-vector/flat-nurse-with-patient_23-2148158494.jpg?w=1380",
              }}
              resizeMode="contain"
              style={styles.patientImage}
            />
            <View style={styles.patientDetailContainer}>
              <Text style={styles.title}>{patientInfo?.name}</Text>
              <Text style={styles.age}>Age: {patientInfo.age}</Text>
            </View>
          </View>

          {/* SCROLLABLE DETAIL VIEW: */}
          <ScrollView
            contentContainerStyle={styles.scrolledView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{
              height: "100%",
              flexGrow: 1,
              marginBottom: Platform.OS === "ios" ? 150 : 70,
            }}
          >
            <View style={{ flexGrow: 1, gap: 20 }}>
              <View style={styles.patientInfo}>
                <PatientInfo title="Gender" detail={patientInfo?.gender} />
                <PatientInfo title="Age" detail={patientInfo?.age} />
              </View>
              <View style={styles.patientInfo}>
                <PatientInfo
                  title="Contact Information"
                  detail={patientInfo?.contactInformation}
                  variant="large"
                />
              </View>

              <View style={styles.historyContainer}>
                <Text style={styles.historyTitle}>Health History</Text>
                <Text
                  style={styles.historyDetail}
                >{`${patientInfo?.healthHistory}`}</Text>
              </View>
              <View style={styles.patientInfo}>
                <CustomButton
                  title="Delete Patient"
                  variant="danger"
                  onPress={clickDelete}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

export default PatientDetail;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 28,
    top: -100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",

    gap: 10,
  },
  patientDetailContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  patientImage: {
    height: 100,
    width: 100,
    borderRadius: 18,
  },
  bannerDetail: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 20,
    padding: 20,
    borderRadius: 28,
    shadowColor: "6b86b340",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 30,
  },
  age: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 18,
  },

  patientInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  scrolledView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",

    gap: 20,
  },
  historyContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "column",
    gap: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  historyTitle: {
    color: "#0E1012",
    fontFamily: "NunitoSans_700Bold",
    fontSize: 17,
  },
  historyDetail: {
    color: "#4A545E",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    letterSpacing: 0.75,
  },
});
