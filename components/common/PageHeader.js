import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
const PageHeader = ({
  goBack = () => {},
  title = "",
  showEdit = true,
  goEdit = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={goBack} style={styles.arrowBack}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>

        <Text style={[styles.patientText, !showEdit && styles.fullWidth]}>
          {title}
        </Text>

        {showEdit && (
          <TouchableOpacity style={styles.arrowBack} onPress={goEdit}>
            <Feather name="edit-2" size={19} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height - 675,
    width: "100%",
    backgroundColor: "#1C6BA4",
    padding: 28,
    paddingTop: Platform.OS === "ios" ? 80 : 30,
  },
  topRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  arrowBack: {
    padding: 16,
    borderRadius: 16,
    borderColor: "#74a0c1",
    borderWidth: 1,
  },
  patientText: {
    color: "#fff",
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 25,
  },
  fullWidth: {
    flexGrow: 0.625,
  },
});
