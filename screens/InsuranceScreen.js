import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

const InsuranceScreen = ({ navigation }) => {
  const [insurance, setInsurance] = useState("");
  const [income, setIncome] = useState("");
  const [Expenses, setExpense] = useState("");

  const handleLogin = () => {

    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0061FF",
      }}
    >
      <View style={[styles.card, styles.dropShadow]}>
        <Text style={styles.inputHeader}>Insurance Amount:</Text>
        <TextInput
          style={styles.inputField}
          value={insurance}
          onChangeText={setInsurance}
          placeholder="Enter Amount"
        />
        <Text style={styles.inputHeader}>HouseHold Income:</Text>
        <TextInput
          style={styles.inputField}
          value={income}
          onChangeText={setIncome}
          placeholder="Enter Income"
          secureTextEntry
        />
         <Text style={styles.inputHeader}>Expenses per month:</Text>
        <TextInput
          style={styles.inputField}
          value={Expenses}
          onChangeText={setExpense}
          placeholder="Enter Expenses"
        />
        <View style={styles.loginButton}>
          {/* <Button
           title="Login" color="blue" onPress={handleLogin} /> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#147EFB",
              padding: 10,
              borderRadius: 4,
              alignItems: "center",
            }}
            onPress={handleLogin}
          >
            <Text style={{ color: "#fff" }}>Get Hospitals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputField: {
    marginBottom: 20,
    fontSize: 16,
    borderBottomColor: "#8aa7ff",
    borderBottomWidth: 1,
  },
  loginButton: {
    marginTop: 20,
  },
  dropShadow: {
    shadowColor: "grey",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  card: {
    width: 300,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: "80%",
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default InsuranceScreen;
