import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import JoinEventScreen from './screens/JoinEventScreen';
import SuccessScreen from './screens/SuccessScreen';
import RewardScreen from './screens/RewardScreen';
import ProfileScreen from './screens/ProfileScreen';
import ClubScreen from './screens/ClubScreen';
import { NativeBaseProvider, Box,Input } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <ClubScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
