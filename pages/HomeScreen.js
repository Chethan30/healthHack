import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import HealthTip from "../components/HealthTip";

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#0061FF",
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={styles.card}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 12 }}>
          Previous Appointment
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={[styles.heading, { color: "lightblue" }]}>
            Patient :{" "}
          </Text>
          <Text style={styles.ans}>John Doe</Text>
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={styles.heading}>Diagnosis : </Text>
          <Text style={styles.ans}>Mild Fever</Text>
        </Text>
        <Text style={{ marginBottom: 10 }}>
          <Text style={styles.heading2}>Doctor : </Text>
          <Text style={styles.ans}>Dr. Joseph</Text>
        </Text>
        <Text style={styles.link}>Check medicine prescriptions ↗</Text>
      </View>
      <View style={[styles.card, { backgroundColor: "#ffb703" }]}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 12 }}>
          Health Tip of the day
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={{ fontSize: 20 }}>
            Your body goes quite a few hours without hydration as you sleep.
            Drinking a full glass of water in the morning can aid digestion,
            flush out toxins, enhance skin health and give you an energy boost
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 20,
    marginBottom: 20,
  },
  heading2: {
    fontWeight: "bold",
    color: "darkblue",
    fontSize: 20,
    marginBottom: 20,
  },
  ans: {
    fontSize: 18,
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 16,
    color: "grey",
  },
  card: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default HomeScreen;
