import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGENAME } from '../Image/profileImage.png';

const userInformation = {
  userName : 'ABXY', 
  userDOB : '12-1-1975', 
  userAddress: 'Richardson TX, 75080',
}


const ProfileScreen = () => {

  const [profileImage, setProfileImage] = useState(require('../Image/profileImage.png'))

  
  return (
    <>
    <Image style={styles.imageContainer} source = {profileImage}></Image>
      <View style={styles.container}>
      <Text style={styles.title}>Name: {userInformation.userName}</Text>
      <Text style={styles.title}>DOB: {userInformation.userDOB}</Text>
        <Text style={styles.title}>Address: {userInformation.userAddress}</Text>
    </View>
    </>   
  );
};
export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    padding: 20,
  },
  imageContainer:{
    width: 400, 
    height: 400, 
    borderRadius: 400/ 2 
  }
});
