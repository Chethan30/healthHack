import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeS" component={HomeScreen} />
      <Tab.Screen name="Settings" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
