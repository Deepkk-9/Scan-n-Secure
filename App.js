import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import InfoBtnScreen from './Screens/InfoBtnScreen';
import ScanningScreen from './Screens/ScanningScreen';
import QRCodeScreen from './Screens/QRCodeScreen';
import StudentDataOnScannedScreen from './Screens/StudentDataOnScannedScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <InfoBtnScreen title="Verify a Student" btnDesc="Scan QR Code" /> */}
      {/* <InfoBtnScreen title="QR Code for verification" btnDesc="Show QR Code" /> */}
      {/* <ScanningScreen /> */}
      {/* <QRCodeScreen userMail="kawaledeep9@gmail.com" /> */}
      <StudentDataOnScannedScreen />
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
