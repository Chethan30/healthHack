import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGENAME } from "../Image/profileImage.png";

const userInformation = {
  userName: "ABXY",
  userDOB: "12-1-1975",
  userAddress: "Richardson TX, 75080",
};

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    require("../Image/profileImage.png")
  );

  return (
    <View
      style={{
        backgroundColor: "#0061FF",
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={[styles.container, styles.card]}>
        <Image style={styles.imageContainer} source={profileImage}></Image>
        <View>
          <Text style={styles.title}>Name: {userInformation.userName}</Text>
          <Text style={styles.title}>DOB: {userInformation.userDOB}</Text>
          <Text style={styles.title}>
            Address: {userInformation.userAddress}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.editButton]}>
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={{ color: "#ffebeb", fontWeight: "bold", fontSize: 20 }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 3,
    marginBottom: 15,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 20,
  },
});
