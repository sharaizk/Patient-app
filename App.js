import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";
import Route from "./routes";

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return (
    // REDUX PROVIDER
    <Provider store={store}>
      <StatusBar style="auto" />
      <Route />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
