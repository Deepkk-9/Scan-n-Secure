import { createStackNavigator } from '@react-navigation/stack';
import InfoBtnScreen from '../Screens/InfoBtnScreen';
import ScanningScreen from '../Screens/ScanningScreen';
import StudentDataOnScannedScreen from '../Screens/StudentDataOnScannedScreen';


const Stack = createStackNavigator();

export const AuthStackT = () => {
    return (
        <Stack.Navigator initialRouteName='IB'>
            <Stack.Screen name='IBT' component={InfoBtnScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Scan' component={ScanningScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={StudentDataOnScannedScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}