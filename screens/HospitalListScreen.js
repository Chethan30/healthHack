import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView, 
  View,
  Text
} from "react-native";
import List from "../components/List";

const data = [
    {
        id: 0, 
        name: 'Hospital 1', 
        url: 'https://www.google.com/maps/place/Methodist+Richardson+Health+Center/@32.9620733,-96.821394,13z/data=!4m10!1m2!2m1!1shospital!3m6!1s0x864c21df8b7fae17:0xd548c71ecf102300!8m2!3d32.9620778!4d-96.7513592!15sCghob3NwaXRhbJIBDm1lZGljYWxfY2xpbmlj4AEA!16s%2Fg%2F1261h5tkh://google',
        miles: 0.23,
        rating: 5, 
    },
    {
        id: 1, 
        name: 'Hospital 2', 
        url: 'https://www.google.com/maps/place/Methodist+Richardson+Health+Center/@32.9620733,-96.821394,13z/data=!4m10!1m2!2m1!1shospital!3m6!1s0x864c21df8b7fae17:0xd548c71ecf102300!8m2!3d32.9620778!4d-96.7513592!15sCghob3NwaXRhbJIBDm1lZGljYWxfY2xpbmlj4AEA!16s%2Fg%2F1261h5tkh://google',
        miles: 0.33, 
        rating: 4.9
    },
    {
        id: 2, 
        name: 'Hospital 3', 
        url: 'https://www.google.com/maps/place/Methodist+Richardson+Health+Center/@32.9620733,-96.821394,13z/data=!4m10!1m2!2m1!1shospital!3m6!1s0x864c21df8b7fae17:0xd548c71ecf102300!8m2!3d32.9620778!4d-96.7513592!15sCghob3NwaXRhbJIBDm1lZGljYWxfY2xpbmlj4AEA!16s%2Fg%2F1261h5tkh://google',
        miles: 0.45, 
        rating: 4.1
    },
    {
        id: 3, 
        name: 'Hospital 4', 
        url: 'https://www.google.com/maps/place/Methodist+Richardson+Health+Center/@32.9620733,-96.821394,13z/data=!4m10!1m2!2m1!1shospital!3m6!1s0x864c21df8b7fae17:0xd548c71ecf102300!8m2!3d32.9620778!4d-96.7513592!15sCghob3NwaXRhbJIBDm1lZGljYWxfY2xpbmlj4AEA!16s%2Fg%2F1261h5tkh://google',
        miles: 0.47, 
        rating: 3.7
    }
]
const HospitalListScreen = () => {
  
  return ( 
    <SafeAreaView
      style={{
        backgroundColor: "#lightblue",
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1
      }
    }
    >
    <View style={[styles.card, {backgroundColor: "darkblue"}]}>
      <Text style={styles.link}>The nearest hospital recommended for you...</Text>
    </View>
    <FlatList
        data={data}
        renderItem={({ item }) => (<List data={item} />)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
    />
    </SafeAreaView>
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
    fontSize: 16,
    color: "white",
    fontWeight: "bold",

  },
  card: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  imageContainer:{
    width: 340, 
    height: 220, 
    borderRadius: 10,
  }
});

export default HospitalListScreen;
