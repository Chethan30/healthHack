import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";

const List = ({ data }) => {
  const handlePress = async () => {
    await Linking.openURL(data.url);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>
          {data.name}
        </Text>
        <View style={styles.milesRating}>
          <Text style={styles.mile}>Miles: {data.miles}</Text>
          <Text style={styles.mile}>Rating: {data.rating}</Text>
        </View>
        {/* <Image style={styles.imageContainer} source = {{uri : data.image}}></Image> */}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightblue",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    marginTop: 20,
  },
  milesRating: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  mile: {
    fontSize: 18,
    color: "black",
    flexBasis: "50%",
    paddingTop: 20,
  },
  imageContainer: {
    width: 340,
    height: 220,
    borderRadius: 10,
  },
});
export default List;
