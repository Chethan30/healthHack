import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
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
        <Text style={styles.inputHeader}>Username:</Text>
        <TextInput
          style={styles.inputField}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <Text style={styles.inputHeader}>Password:</Text>
        <TextInput
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
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
            <Text style={{ color: "#fff" }}>Login</Text>
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

export default LoginScreen;
