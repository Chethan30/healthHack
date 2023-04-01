import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

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
      }}
    >
      <View
        style={{
          width: 300,
        }}
      >
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
          <Button title="Login" onPress={handleLogin} />
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
    marginBottom: 10,
    fontSize: 16,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  loginButton: {
    marginTop: 20,
  },
});

export default LoginScreen;
