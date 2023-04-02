import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "react-native-vector-icons";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="HomeS"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="stethoscope" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
