// SCREENS:
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import PatientDetail from "./Screens/PatientDetail";
import EditPatient from "./Screens/EditPatient";

// LOADING SCREEN
import AppLoading from "./Screens/AppLoading";

import BottomTabs from "./components/common/BottomTabs";
// IMPORTING NAVIGATION PACKAGES
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useSelector } from "react-redux";
import { tryLocalSignIn } from "./redux/authSlice";
import { useDispatch } from "react-redux";

import {
  useFonts,
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from "@expo-google-fonts/nunito-sans";
import { useEffect } from "react";
// DEFINING TWO TYPE OF NAVIGATORS
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F2F1F6",
  },
};

const Route = () => {
  const isSignedIn = useSelector(({ authSlice }) => authSlice.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(tryLocalSignIn());
  }, []);

  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  } else if (!isSignedIn) {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen name="tabs" component={BottomTabs} />
          <Stack.Screen name="PatientDetail" component={PatientDetail} />
          <Stack.Screen name="EditPatient" component={EditPatient} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Route;
