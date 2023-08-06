import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import NewPatientScreen from "../../Screens/NewPatientScreen";
import { AntDesign } from "@expo/vector-icons";
import SettingScreen from "../../Screens/SettingScreen";
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#1C6BA4",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {

          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={style.tab}>
                <AntDesign
                  name="home"
                  size={30}
                  color={focused ? "#1C6BA4" : "#7B8D9E"}
                />
                <Text
                  style={{
                    ...style.tabText,
                    color: focused ? "#1C6BA4" : "#7B8D9E",
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NewPatientDrawer"
        component={NewPatientScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="plus" size={30} color="white" />;
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={style.tab}>
                <AntDesign
                  name="setting"
                  size={30}
                  color={focused ? "#1C6BA4" : "#7B8D9E"}
                />
                <Text
                  style={{
                    ...style.tabText,
                    color: focused ? "#1C6BA4" : "#7B8D9E",
                  }}
                >
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#e7eef4",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    shadowOpacity: 1,
    elevation: 5,
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    flexDirection: "column",
  },
  tabText: {
    fontSize: 14,
  },
});
