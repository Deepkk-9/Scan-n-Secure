import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import ScanInfoBtnScreen from './Screens/ScanInfoBtnScreen';
import ScanningScreen from './Screens/ScanningScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <ScanInfoBtnScreen /> */}
      <ScanningScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
