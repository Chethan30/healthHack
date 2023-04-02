import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const GameScreen = () => {
  const [streakCount, setStreakCount] = useState(12);
  const [previousMaxStreakCount, setpreviousMaxStreakCount] = useState(12);
  const [pointsCollected, setPointsCollected] = useState(45);
  const [pointsWorth, setPointsWorth] = useState(3.75);

  const handleSuccess = () => {
    setStreakCount(streakCount+1);
    setPointsWorth(pointsWorth/10 + pointsWorth);
    setPointsCollected(pointsWorth/100 + pointsCollected);
  }
  const handleFailure = () => {
    setpreviousMaxStreakCount(streakCount);
    setStreakCount(0);
    setPointsWorth(0);
    setPointsCollected(0);
  }
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
          Points Collected : {pointsCollected.toFixed(2)}
        </Text>
        
        <Text style={styles.heading3}>Points are worth : $ {pointsWorth.toFixed(2)}</Text>
        <Text style={styles.link}>Redeem points here ↗</Text>
      </View>
      <View style={[styles.card, { backgroundColor: "#ffb703" }]}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
          Streak Count :  {streakCount}
        </Text>
        <Text style={{ marginBottom: 8,  fontSize: 20 }}>
          Previous Max Streak Count : {previousMaxStreakCount}
        </Text>

      </View>
      <View style={styles.card}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 12 }}>
          Did you take the medicines today ?
        </Text>
        <TouchableOpacity
          onPress={handleSuccess}
        >
          <Text style={[styles.heading2, {backgroundColor:'lightblue', padding: 20, alignSelf:'center'}]}>Add to the streak</Text>
          </TouchableOpacity>
      

        <Text style={{ fontSize: 24, marginBottom: 12 }}>
          Did you miss ? You lose your points
        </Text>
        <TouchableOpacity
          onPress={handleFailure}
        >
          <Text style={[styles.heading2, {backgroundColor:'lightblue', padding: 20, alignSelf:'center'}]}>Click to start new streak</Text>
          </TouchableOpacity>
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
  heading3: {
    fontWeight: "bold",
    color: "lightblue",
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

export default GameScreen;
