import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


// import ProfileScreen from './screens/ProfileScreen';
import DiagnonsisScreen from './screens/DiagnonsisScreen';

export default function App() {
  return <AppContainer />;
}


const MainNavigator = createStackNavigator({
  //Profile: ProfileScreen,
  Diagnonsis_Screen: DiagnonsisScreen,
});


const AppContainer = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});