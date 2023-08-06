import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import PatientMini from "../custom/PatientMini";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { fetchAllPatients, setPage } from "../../redux/patientSlice";
import { useDispatch } from "react-redux";

const PatientList = () => {
  const { page, patients, isLoading, totalPages } = useSelector(
    ({ patientSlice }) => patientSlice
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // FETCHES THE LIST OF PATIENTS AND ON PAGE CHANGE IT FETCHES NEW LIST
  useEffect(() => {
    try {
      dispatch(fetchAllPatients({ page }));
    } catch (e) {
      console.log(e);
    }
  }, [page]);

  // THIS FUNCTION iS EXECUTED WHEN YOU HAVE REACH BOTTOM OF THE LIST
  const handleNextPage = ({ distanceFromEnd }) => {
    const nextPage = parseInt(page) + 1;

    if (nextPage < totalPages) {
      dispatch(setPage(nextPage));
    }
  };

  const navigate = (itemId) => {
    navigation.navigate("PatientDetail", {
      itemId: itemId,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Patients</Text>

        {isLoading && <ActivityIndicator color="black" size={30} />}
      </View>
      <FlatList
        data={patients}
        renderItem={(props) => <PatientMini {...props} onNavigate={navigate} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={handleNextPage}
        style={{ width: "100%" }}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default PatientList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
    // paddingBottom: 225,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  title: {
    color: "#0E1012",
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    // marginBottom: 20,
  },
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  head: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
});
