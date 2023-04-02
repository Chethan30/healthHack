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
        <Text style={styles.title}>Results will be displayed here</Text>
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
